import React from 'react';
import { ApolloClient, ApolloProvider ,InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import User from "./components/User"
import Landing from "./components/Landing"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/landing">
            <Landing />
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
