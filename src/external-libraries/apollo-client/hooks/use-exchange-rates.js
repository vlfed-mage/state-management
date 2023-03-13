import { useQuery } from '@apollo/client';

import { EXCHANGE_RATES_QUERY } from '../graphql';

const useExchangeRates = () => useQuery(EXCHANGE_RATES_QUERY);

export default useExchangeRates;
