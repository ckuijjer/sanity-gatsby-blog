import { format } from 'date-fns'

// - name: AWS DynamoDB
//   description:
//     A serverless NoSQL database that is optimized for OLTP systems. Eg.
//     used by Amazon to power their shopping carts.
//   longDescription: A serverless NoSQL database that is optimized for OLTP systems. Famously it is used by Amazon itself to power their shopping cart. Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.
//   category: Database
//   status: 5
//   automationLevel: 4
//   notableExamples:
//     - project: Bundelz
//       notes: Applied the single table database design
//       repositoryUrl: https://dev.azure.com/cio-innovation-nn-group/Bundelz/_git/bundelz-api

export default {
  name: 'tool',
  type: 'document',
  title: 'Catapult Tool',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the tool'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Description of the Catapult tool'
    },
    {
      name: 'longDescription',
      type: 'text',
      title: 'Long Description',
      description: 'A longer description of the Catapult tool',
      options: {
        source: 'description'
      }
    },
    {
      name: 'category',
      type: 'reference',
      to: {
        type: 'toolCategory'
      },
      title: 'Category',
      description: 'Category of the Catapult tool'
    },
    {
      name: 'status',
      type: 'number',
      title: 'Status',
      description: 'Status of the Catapult tool (0-5)',
      integer: () => true,
      min: (...args) => {
        console.log('🤯', { args })
        return 0
      },
      max: () => 5
    },
    {
      name: 'automationLevel',
      type: 'number',
      title: 'Automation Level',
      description: 'Automation level of the Catapult tool (0-5)',
      integer: () => true,
      min: () => 0,
      max: () => 5
    },
    {
      name: 'notableExamples',
      type: 'array',
      title: 'Notable Examples',
      description: 'Notable examples of this Catapult tool',
      of: [
        {
          type: 'reference',
          to: {
            type: 'notableExample'
          }
        }
      ]
    }
  ]
  //   orderings: [
  //     {
  //       name: 'publishingDateAsc',
  //       title: 'Publishing date new–>old',
  //       by: [
  //         {
  //           field: 'publishedAt',
  //           direction: 'asc'
  //         },
  //         {
  //           field: 'title',
  //           direction: 'asc'
  //         }
  //       ]
  //     },
  //     {
  //       name: 'publishingDateDesc',
  //       title: 'Publishing date old->new',
  //       by: [
  //         {
  //           field: 'publishedAt',
  //           direction: 'desc'
  //         },
  //         {
  //           field: 'title',
  //           direction: 'asc'
  //         }
  //       ]
  //     }
  //   ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //       publishedAt: 'publishedAt',
  //       slug: 'slug',
  //       media: 'mainImage'
  //     },
  //     prepare({ title = 'No title', publishedAt, slug = {}, media }) {
  //       const dateSegment = format(publishedAt, 'YYYY/MM')
  //       const path = `/${dateSegment}/${slug.current}/`
  //       return {
  //         title,
  //         media,
  //         subtitle: publishedAt ? path : 'Missing publishing date'
  //       }
  //     }
  //   }
}
