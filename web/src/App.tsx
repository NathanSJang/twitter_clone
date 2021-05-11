import React from 'react';
import { ApolloClient, ApolloProvider ,InMemoryCache, HttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import User from "./components/User"
import Landing from "./components/Landing"

import { setContext } from "apollo-link-context";
import Signup from './pages/Signup';
import Login from './pages/Login';

const httpLink = new HttpLink({uri: "http://localhost:4000"});
const authLink = setContext(async(req, {headers}) => {
  const token = localStorage.getItem('token');

  return {
    ...headers,
    headers: {
      Authorization : token ? `Bearer ${token}` : null
    }
  }
});

const link = authLink.concat(httpLink as any)
const client =  new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <User />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
