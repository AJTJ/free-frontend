import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const GetAllUsers = gql`
  query UsersService {
    getAllUsers {
      users
    }
  }
`;

interface Rate {
  currency: string;
  rate: number;
}

const App = () => {
  const { loading, error, data } = useQuery(GetAllUsers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:()</p>;

  if (data?.rates) {
    return data.rates.map((rate: Rate) => {
      return (
        <div key={rate.currency}>
          <p>
            {rate.currency}: {rate.rate}
          </p>
        </div>
      );
    });
  } else {
    return <div>Not functioning</div>;
  }
};

export default App;
