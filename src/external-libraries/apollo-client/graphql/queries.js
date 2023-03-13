import { gql } from '@apollo/client';

const EXCHANGE_RATES_QUERY = gql`
    query ExchangeRates {
        allPeople {
            people {
                name
            }
        }
    }
`;

export default EXCHANGE_RATES_QUERY;
