import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { App } from './App'
import { AppProvider } from './AppContext'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgramcuroavanzadoreact.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('console.log -> ERROR !')
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, location, path }) =>
      console.log(
        `[GraphQL error]: 
          Message: ${message}, 
          Location: ${location}, 
          Path: ${path}`
      )
    )
  }
  if (networkError) {
    console.log(`[Netkwork error]: ${networkError}`)
  }
})

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
  )
})

ReactDOM.render(
  <>
    <ApolloProvider client={client}>
      <AppProvider>
        <App />
      </AppProvider>
    </ApolloProvider>
  </>,
  document.getElementById('app')
)
