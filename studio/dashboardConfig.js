export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e05d19399332e857eb5fe4e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3phjysfz',
                  apiId: '089bd198-cfd6-4694-afcf-813ef7a9ae8f'
                },
                {
                  buildHookId: '5e05d1938bf2644446862952',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-egzctusf',
                  apiId: '3b4b2dfe-2502-4dd6-bc4c-605434a69bd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ckuijjer/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-egzctusf.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
