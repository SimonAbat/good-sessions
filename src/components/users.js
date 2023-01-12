/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Users = () => {
  const users = useStaticQuery(graphql`
   query {
     allContentfulUser {
       nodes {
         name
       }
     }
   }
 `
  )


  return (
    <>
      {users.allContentfulUser.nodes.map((user) => (

        <div key={user.name}>{user.name}</div>

      ))}
    </>
  )
}

export default Users
