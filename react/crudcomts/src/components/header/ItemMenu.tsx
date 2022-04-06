import { Link } from "react-router-dom";
const ItemMenu = () => {
  const token = localStorage.getItem("key");
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      {token ? (
        <>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/users">Users </Link>
          </li>
          <li>
            <Link to="/address">Address </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login </Link>
        </li>
      )}
    </>
  );
};

export default ItemMenu;
