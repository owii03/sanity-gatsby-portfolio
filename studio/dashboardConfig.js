export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e21de51c39a7c237986928d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qxe178pp',
                  apiId: '71db7990-330b-4454-93d8-13b25e6a2403'
                },
                {
                  buildHookId: '5e21de51df00c678c68f14ca',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-od8m9pnx',
                  apiId: 'ffd54888-d946-4cab-8cda-b40ce8ace543'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/owii03/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-od8m9pnx.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
