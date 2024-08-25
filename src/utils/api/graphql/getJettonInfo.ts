import { request, gql } from 'graphql-request';

const document = gql`
  query jettonInfo($address: String) {
    marketData_0: redoubt_jettons_market_data (
      where: {
        address: {
          _eq: $address
        }
      },
      order_by: {
        build_time: desc
      },
      limit: 100,
      offset: 0
    ) {
      address
      market_volume_ton
      price
      build_time
      symbol
    }
    marketData_1: redoubt_jettons_market_data (
      where: {
        address: {
          _eq: $address
        }
      },
      order_by: {
        build_time: desc
      },
      limit: 100,
      offset: 100,
    ) {
      address
      market_volume_ton
      price
      build_time
      symbol
    }
    marketData_2: redoubt_jettons_market_data (
      where: {
        address: {
          _eq: $address
        }
      },
      order_by: {
        build_time: desc
      },
      limit: 100,
      offset: 200
    ) {
      address
      market_volume_ton
      price
      build_time
      symbol
    }
    marketData_3: redoubt_jettons_market_data (
      where: {
        address: {
          _eq: $address
        }
      },
      order_by: {
        build_time: desc
      },
      limit: 100,
      offset: 300
    ) {
      address
      market_volume_ton
      price
      build_time
      symbol
    }
    jettonInfo: redoubt_active_jettons_info (where: {
      address: {
        _eq: $address
      }
    }) {
      address
      admin_address
      decimals
      market_volume_ton
      price
      symbol
      total_tvl
    }
  }
`;

export const getJettonInfo = (address: string) => request<IJettonInfoResponse>({
  url: process.env.REACT_APP_REDOUBT_API_URL!,
  document,
  variables: {
    address,
  },
  requestHeaders: {
    'X-API-Key': process.env.REACT_APP_REDOUBT_API_KEY!,
  },
});

interface MarketDataSlice {
  active_owners_24: number;
  address: string;
  build_time: string;
  market_volume_ton: number;
  price: number;
  price_usd: number;
  symbol: string;
  total_holders: number;
}

export interface IJettonInfoResponse {
  marketData_0: MarketDataSlice[];
  marketData_1: MarketDataSlice[];
  marketData_2: MarketDataSlice[];
  marketData_3: MarketDataSlice[];
  jettonInfo: {
    address: string;
    admin_address: string;
    decimals: number;
    market_volume_ton: number;
    price: number;
    symbol: string;
    total_tvl: number;
  }[];
}

