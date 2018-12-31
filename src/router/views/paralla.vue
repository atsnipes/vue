<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Parallax',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>
<template>
  <Layout>
    <VApp>
      <VToolbar>
        <VToolbarTitle v-text="hi" />
      </VToolbar>

      <VContent>
        <section>
          <p>
            sdf  
          </p>
        </section>
      </VContent>
    </VApp>
  </Layout>
</template>
  <!--<template>
 <Layout>
    <VApp light>
      <VToolbar class="white">
        <VToolbarTitle v-text="title" />
      </VToolbar>
      <VContent>
        <section>
          <VParallax 
            src="assets/hero.jpeg" 
            height="600"
          >
            <VLayout
              column
              align-center
              justify-center
              class="white--text"
            >
              <img 
                src="assets/vuetify.png" 
                alt="Vuetify.js" 
                height="200"
              >
              <h1 class="white--text mb-2 display-1 text-xs-center">
                Parallax Template
              </h1>
              <div class="subheading mb-3 text-xs-center">
                Powered by Vuetify
              </div>
              <VBtn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </VBtn>
            </VLayout>
          </VParallax>
        </section>

        <section>
          <VLayout
            column
            wrap
            class="my-5"
            align-center
          >
            <VFlex 
              xs12 
              sm4 
              class="my-3"
            >
              <div class="text-xs-center">
                <h2 class="headline">
                  The best way to start developing
                </h2>
                <span class="subheading">
                  Cras facilisis mi vitae nunc 
                </span>
              </div>
            </VFlex>
            <VFlex xs12>
              <VContainer grid-list-xl>
                <VLayout 
                  row 
                  wrap 
                  align-center
                >
                  <VFlex 
                    xs12 
                    md4
                  >
                    <VCard class="elevation-0 transparent">
                      <VCardText class="text-xs-center">
                        <VIcon 
                          x-large 
                          class="blue--text text--lighten-2"
                        >
                          color_lens
                        </VIcon>
                      </VCardText>
                      <VCardTitle 
                        primary-title 
                        class="layout justify-center"
                      >
                        <div class="headline text-xs-center">
                          Material Design
                        </div>
                      </VCardTitle>
                      <VCardText>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </VCardText>
                    </VCard>
                  </VFlex>
                  <VFlex 
                    xs12 
                    md4
                  >
                    <VCard class="elevation-0 transparent">
                      <VCardText class="text-xs-center">
                        <VIcon 
                          x-large 
                          class="blue--text text--lighten-2"
                        >
                          flash_on
                        </VIcon>
                      </VCardText>
                      <VCardTitle 
                        primary-title 
                        class="layout justify-center"
                      >
                        <div class="headline">
                          Fast development
                        </div>
                      </VCardTitle>
                      <VCardText>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </VCardText>
                    </VCard>
                  </VFlex>
                  <VFlex 
                    xs12 
                    md4
                  >
                    <VCard class="elevation-0 transparent">
                      <VCardText class="text-xs-center">
                        <VIcon 
                          x-large 
                          class="blue--text text--lighten-2"
                        >
                          build
                        </VIcon>
                      </VCardText>
                      <VCardTitle 
                        primary-title 
                        class="layout justify-center"
                      >
                        <div class="headline text-xs-center">
                          Completely Open Sourced
                        </div>
                      </VCardTitle>
                      <VCardText>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </VCardText>
                    </VCard>
                  </VFlex>
                </VLayout>
              </VContainer>
            </VFlex>
          </VLayout>
        </section>

        <section>
          <VParallax 
            src="assets/section.jpg" 
            height="380"
          >
            <VLayout 
              column 
              align-center 
              justify-center
            >
              <div class="headline white--text mb-3 text-xs-center">
                Web development has never been easier
              </div>
              <em>Kick-start your application today</em>
              <VBtn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </VBtn>
            </VLayout>
          </VParallax>
        </section>

        <section>
          <VContainer grid-list-xl>
            <VLayout 
              row 
              wrap 
              justify-center 
              class="my-5"
            >
              <VFlex 
                xs12 
                sm4
              >
                <VCard class="elevation-0 transparent">
                  <VCardTitle 
                    primary-title 
                    class="layout justify-center"
                  >
                    <div class="headline">
                      Company info
                    </div>
                  </VCardTitle>
                  <VCardText>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                  </VCardText>
                </VCard>
              </VFlex>
              <VFlex 
                xs12 
                sm4 
                offset-sm1
              >
                <VCard class="elevation-0 transparent">
                  <VCardTitle 
                    primary-title 
                    class="layout justify-center"
                  >
                    <div class="headline">
                      Contact us
                    </div>
                  </VCardTitle>
                  <VCardText>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  </VCardText>
                  <VList class="transparent">
                    <VListTile>
                      <VListTileAction>
                        <VIcon class="blue--text text--lighten-2">
                          phone
                        </VIcon>
                      </VListTileAction>
                      <VListTileContent>
                        <VListTileTitle>777-867-5309</VListTileTitle>
                      </VListTileContent>
                    </VListTile>
                    <VListTile>
                      <VListTileAction>
                        <VIcon class="blue--text text--lighten-2">
                          place
                        </VIcon>
                      </VListTileAction>
                      <VListTileContent>
                        <VListTileTitle>Chicago, US</VListTileTitle>
                      </VListTileContent>
                    </VListTile>
                    <VListTile>
                      <VListTileAction>
                        <VIcon class="blue--text text--lighten-2">
                          email
                        </VIcon>
                      </VListTileAction>
                      <VListTileContent>
                        <VListTileTitle>john@vuetifyjs.com</VListTileTitle>
                      </VListTileContent>
                    </VListTile>
                  </VList>
                </VCard>
              </VFlex>
            </VLayout>
          </VContainer>
        </section>

        <VFooter class="blue darken-2">
          <VLayout 
            row 
            wrap 
            align-center
          >
            <VFlex xs12>
              <div class="white--text ml-3">
                Made with
                <VIcon class="red--text">
                  favorite
                </VIcon>
                by <a 
                  class="white--text" 
                  href="https://vuetifyjs.com" 
                  target="_blank"
                >
                  Vuetify
                </a>
                and <a 
                  class="white--text" 
                  href="https://github.com/vwxyzjn"
                >
                  Costa Huang
                </a>
              </div>
            </VFlex>
          </VLayout>
        </VFooter>
      </VContent>
    </VApp>
  </Layout>
</template> -->
