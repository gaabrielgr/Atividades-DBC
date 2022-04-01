import { createContext } from "react";
import React, { useState } from "react";
import api from "../api";

export const ContextUser = createContext();

function UserProvider({ children }) {
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getUsers() {
    try {
      const { data } = await api.get("/pessoa");
      setListUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <ContextUser.Provider value={{ getUsers, loading, error, listUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export default UserProvider;
