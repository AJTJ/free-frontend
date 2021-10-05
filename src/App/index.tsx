import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Home } from "./Home";
import { LoginComponent } from "./Login";
import { User } from "./models/user";
import { useCookies } from "react-cookie";
import { DiveSession } from "./models/dive-session";

const GET_LATEST_SESSIONS = gql`
  query
`;

const App = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [diveSessionsData, setDiveSessionsData] = useState<DiveSession | null>(
    null
  );

  if (!userData && !diveSessionsData) {
  }

  return (
    <div>
      <LoginComponent {...{ setUserData }} />
      <Home {...{ userData, diveSessionsData }} />
    </div>
  );
};

export default App;
