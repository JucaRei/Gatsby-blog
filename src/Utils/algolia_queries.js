const postQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

// 7 - ObjectID é necessário para o algolia, para ele identificar cada 1 dos posts
// 17 - Pegar um pedaço do conteúdo do post, para pesquisar por textos dentro do post
// 17 - excerpt pega um resumo do post // numero de carácteres

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

// separar de 20 em 20
const settings = { attributesToSnippet: [`excerpt:20`] }

// pegar o frontmatter
// algolia usa timestamp unix
// transformer é o dado que vai ser enviado pro algolia

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: `Posts`, // overrides main index name, optional
    settings,
  },
]

module.exports = queries
