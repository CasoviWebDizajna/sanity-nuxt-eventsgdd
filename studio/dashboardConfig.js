export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-eventsgdd-studio',
                  apiId: '7d96706b-18dc-40dd-a806-f24c94601d78'
                },
                {
                  buildHookId: '5eda0a60e69d8eac87721897',
                  title: 'Events Website',
                  name: 'sanity-nuxt-eventsgdd',
                  apiId: 'cb0ccdab-3718-4c6b-a2c3-eaacdecb0d9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CasoviWebDizajna/sanity-nuxt-eventsgdd',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-eventsgdd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
