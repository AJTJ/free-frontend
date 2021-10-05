import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { User } from "../models/user";

const LOGIN = gql`
  mutation login($passwordLoginInput: PasswordLoginInput!) {
    login(passwordLoginInput: $passwordLoginInput) {
      id
    }
  }
`;

interface LoginComponentProps {
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

export const LoginComponent = ({ setUserData }: LoginComponentProps) => {
  const [loginUser, { loading, error, data }] = useMutation(LOGIN);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await loginUser({
        variables: {
          passwordLoginInput: {
            // username: "Joe",
            password: "12345",
            email: "joe@joe.com",
          },
        },
      });
    } catch (e) {
      console.log("is an error");
      console.error(e);
    }
  };

  if (!!data) {
    setUserData(data);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Login</button>
      {loading && <span>Loading...</span>}
      {error && <span>there is an error</span>}
      {data && <span>able to log in</span>}
    </div>
  );
};
