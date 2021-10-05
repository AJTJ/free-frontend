import react from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      name
      email
    }
  }
`;

const GET_ALL_USERS_PROTECTED = gql`
  query {
    getAllUsersProtected {
      name
      email
    }
  }
`;

export const GetAllUsersComponent = (props: any) => {
  const { isProtected = false } = props;
  const { loading, error, data } = useQuery(
    isProtected ? GET_ALL_USERS_PROTECTED : GET_ALL_USERS
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>there is an error</p>}
      {data && <div>data is loading</div>}
    </div>
  );
};
