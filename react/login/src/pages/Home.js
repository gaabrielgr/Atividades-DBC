import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContextAuthenticator } from "../contexts/ContextAuthenticator";
const Home = () => {
  const { logged } = useContext(ContextAuthenticator);
  useEffect(() => {
    logged();
  }, []);
  return <div>Home</div>;
};

export default Home;
