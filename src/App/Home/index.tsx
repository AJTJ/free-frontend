import react from "react";
import { User } from "../models/user";

interface HomeProps {
  userData: User | null;
}

export const Home = ({ userData }: HomeProps) => {
  return (
    <div>
      <div>The home page</div>
      <div>{userData ? "hi" : "not logged"}</div>
    </div>
  );
};
