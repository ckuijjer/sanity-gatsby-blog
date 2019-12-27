// - project: Bundelz
// notes: Applied the single table database design
// repositoryUrl: https://dev.azure.com/cio-innovation-nn-group/Bundelz/_git/bundelz-api

export default {
  name: 'notableExample',
  type: 'document',
  title: 'Catapult Notable Example',
  fields: [
    {
      name: 'project',
      type: 'string',
      title: 'Project'
    },
    {
      name: 'notes',
      type: 'text',
      title: 'Notes'
    },
    {
      name: 'repositoryUrl',
      type: 'url',
      title: 'Repository Url'
    }
  ]
}
