import { GraphQLClient } from 'graphql-request'
import { getSdk } from './gen-types'
import gql from 'graphql-tag'

const gqlClient = new GraphQLClient('https://graphqlzero.almansi.me/api')

const query = gql`
  query GetUser {
    user(id: 1) {
      id
      name
      username
    }
  }
`

const client = getSdk(gqlClient)

const getQuery = async () => {
  const res = await client.GetUser()

  console.log(res.user)
}

getQuery()
