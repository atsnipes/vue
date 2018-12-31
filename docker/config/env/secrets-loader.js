// This file will run if environment is not local
// EXECUTION OF THIS FILE IS MEANT TO OCCUR IN REPO ROOT! Directory look-ups will not work otherwise
const fs = require('fs')
const SecretsProvider = require('@dude/docker-secrets').DockerSecrets

const env = process.env
const SECRETS_DIR = env.IntelligenceNextSecretsPath || './run/local/'
const configProvider = new SecretsProvider({
  secretsPath: SECRETS_DIR,
  defaults: {
    identity: {
      url: 'http://identity.localtest.me:5098',
    },
    intelligenceOIDC: {
      url: 'http://intelligence.localtest.me:5201',
    },
    intelligenceFrontend: {
      clientId: 'IntelligenceNext.ClientId.local',
      redirectUris: ['http://intelligencenext.localtest.me:8080/auth/callback'],
      responseType: 'id_token token',
      scope: 'openid intelligence',
      baseUrl: 'http://intelligencenext.localtest.me',
    },
  },
})

const envVars = {
  baseUrl: configProvider.config.intelligenceFrontend.baseUrl,
  identityUrl: configProvider.config.identity.url,
  clientId: configProvider.config.intelligenceFrontend.clientId,
  allowedGrantTypes: ['implicit'],
  allowedScopes: configProvider.config.intelligenceFrontend.scope.split(' '),
  redirectUris: configProvider.config.intelligenceFrontend.redirectUris,
  responseType: configProvider.config.intelligenceFrontend.responseType,
  intelligenceOIDC: {
    baseUrl: configProvider.config.intelligenceOIDC.url,
  },

  // TODO DINT-746: frontChannelLogoutUri: configProvider.config.dudeIntelligenceWeb.frontChannelLogoutUri,
  // TODO DINT-746: requireConsent: false
}

// Write our env details to a place the application can read them
let ENVFILE_COMMENT_HEADER = '// THIS IS GENERATED VIA /docker/config/env/secrets-loader.js'

/**
 * @private
 * @description We perform this transformation to make the generated file legible, should anyone ever need
 * to inspect it within the container. Because we are writing to a file to create valid javascript, there is a bit
 * of string manipulation to accomplish this. We could encapsulate this with JSON.parse(JSON.stringify)
 * but we lose legibility and control over the process, as well we would need to export it as a function rather
 * than a const. Const is prefered.
 * @param {object} envData - the Environment Variables object to output
 * @returns {string} the string representation of our const object
 */
const generateENVObject = envData => {
  let stringData = '{'
  Object.keys(envData).forEach(property => {
    if (!Array.isArray(envData[property]) && typeof envData[property] === 'object') {
      stringData += `${property}: ${generateENVObject(envData[property])},`
    } else if (Array.isArray(envData[property])) {
      const quotedValues = envData[property].map(item => `'${item}'`)
      stringData += `${property}: [ ${quotedValues} ],`
    } else {
      stringData += `${property}: '${envData[property]}',`
    }
  })
  return `${stringData}}`
}
// Generate the const for the app
fs.writeFileSync('./src/config/env.js', `${ENVFILE_COMMENT_HEADER}\n export const ENV = ${generateENVObject(envVars)}`)
// Generate the baseUrl for the webpack bundle process
fs.writeFileSync('./baseUrl.js', `${ENVFILE_COMMENT_HEADER}\n module.exports = { baseUrl: '${envVars.baseUrl}' }`)
// Jobs done.
