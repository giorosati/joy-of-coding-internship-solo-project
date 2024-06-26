import type { ArticlesQuery, ArticlesQueryVariables } from 'types/graphql'
import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  ArticlesQuery,
  ArticlesQueryVariables
> = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}

// export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
//   return (
//     <>
//       {articles.map((article) => (
//         <article key={article.id}>
//           <header>
//             <h2>{article.title}</h2>
//           </header>
//           <p>{article.body}</p>
//           <div>Posted at: {article.createdAt}</div>
//         </article>
//       ))}
//     </>
//   )
// }
