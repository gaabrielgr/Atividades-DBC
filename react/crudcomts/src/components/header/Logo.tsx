import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Logo = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem(""));
  useEffect(() => {
    setToken(localStorage.getItem("key"));
  }, []);
  return (
    <div>
      {token ? <Link to="/">Logo</Link> : <Link to="/login">Logo</Link>}
    </div>
  );
};

export default Logo;
