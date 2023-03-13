import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '../graphql';
import useExchangeRates from '../hooks';

const App = () => {
    let { data, loading } = useExchangeRates();

    if (loading) return <div>Loading...</div>;
    if (!data) return <div>No data :(</div>;

    const {
        allPeople: { people },
    } = data;

    return (
        <ul>
            {people.map(person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ul>
    );
};

const AppContainer = () => {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
};

export default AppContainer;
