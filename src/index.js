import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { App } from './App'
import { AppProvider } from './AppContext'

const client = new ApolloClient({
  uri: 'https://petgramcuroavanzadoreact.vercel.app/graphql',
  cache: new InMemoryCache()
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
