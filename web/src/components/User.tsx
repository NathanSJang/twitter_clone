import { gql, useQuery } from "@apollo/client"

const USERS_QUERY = gql`
query USERS_QUERY {
  users{
    id
    name
  }
}
`

interface U {
  name: string
}

export default function User() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if(loading) return <p>Loading...</p>
  if(error) return <p>{ error?.message }</p>
  
  return (
    <div>
      {data.users.map((user: U) => <p>{user.name}</p>)}
    </div>
  )
}