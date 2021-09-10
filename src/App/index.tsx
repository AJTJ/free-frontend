import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      name
      email
      password
    }
  }
`;

const LOGIN = gql`
  mutation login($passwordLoginInput: PasswordLoginInput!) {
    login(passwordLoginInput: $passwordLoginInput) {
      access_token
    }
  }
`;

const LoginComponent = () => {
  const [loginUser, { loading, error, data }] = useMutation(LOGIN);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await loginUser({
        variables: {
          passwordLoginInput: {
            username: "Joe",
            password: "1234s5",
          },
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Login</button>
      {loading && <div>loading...</div>}
      {error && <div>Error: ${JSON.stringify(error)} </div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

const GetAllUsersComponent = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR: ${JSON.stringify(error)}</p>;

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return <div>No data</div>;
  }
};

const App = () => {
  return (
    <div>
      <LoginComponent />
      <GetAllUsersComponent />
    </div>
  );
};

export default App;

// interface Rate {
//   currency: string;
//   rate: number;
// }

// if (data?.rates) {
//   return data.rates.map((rate: Rate) => {
//     return (
//       <div key={rate.currency}>
//         <p>
//           {rate.currency}: {rate.rate}
//         </p>
//       </div>
//     );
//   });
// } else {
//   return <div>Not functioning</div>;
// }
