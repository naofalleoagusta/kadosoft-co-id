import React, { Fragment, Suspense } from 'react';
import './App.css';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import routes from "./data/routes";
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Footer from "./components/Footer";
import Loading from "./components/Loading"

const client = new ApolloClient({
    uri: "https://edge.kadosoft.co.id/graphql",
    cache: new InMemoryCache()
});
function App() {
    return (
        <ApolloProvider client={client}>
            <Fragment>
                <Suspense fallback={<Loading />}>
                    <Router>
                        <Switch>
                            {
                                routes.map((route, idx, props) =>
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        component={route.component}
                                        {...props}
                                    />
                                )
                            }
                        </Switch>
                        <Footer />
                    </Router>
                </Suspense>
            </Fragment>
        </ApolloProvider>
    );
}

export default App;
