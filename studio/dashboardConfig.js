export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5daddd8837ec7af8a973fff7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zvhk7f78',
                  apiId: '0d8b58df-d0eb-46b1-b172-4e61562003e2'
                },
                {
                  buildHookId: '5daddd88be319f72f79356b8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-2pj4kuj2',
                  apiId: '6e376035-ec57-43d1-8b7f-b11a5f77c22f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryanw56/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-2pj4kuj2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
