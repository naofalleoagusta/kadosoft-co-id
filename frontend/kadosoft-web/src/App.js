import React, { Suspense } from 'react';
import Header from "./components/Header";
import LoadingLayout from "./components/Loading";
import Footer from "./components/Footer";
import routes from "./data/routes";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import ReactGA from "react-ga";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import withTracker from "./middlewares/withTracker";
import { GA_ID } from "./data/constants";

const client = new ApolloClient({
  uri: "https://edge.kadosoft.co.id/graphql",
});
ReactGA.initialize(GA_ID);

class App extends React.Component {
  componentDidMount() {
    ReactGA.timing({
      category: "JS Libraries",
      variable: "load",
      value: 20, // in milliseconds
      label: "CDN libs"
    });
  }

  render() {
    return (<Router>
      <Suspense fallback={
        <LoadingLayout />
      }>
        <ApolloProvider client={client}>
          <div className="fallback-fadein">
            <Header />
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={withTracker(route.component)}
                />
              ))}
            </Switch>
            <Footer />
          </div>
        </ApolloProvider>
      </Suspense>
    </Router>)
  }
}

export default App;