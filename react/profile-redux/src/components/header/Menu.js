import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";
const Menu = ({ auth, dispatch }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        {auth.auth && (
          <>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/profile"}>
              <li>Profile</li>
            </Link>
            <button onClick={() => handleLogout(dispatch, navigate)}>
              SAIR
            </button>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});
export default connect(mapStateToProps)(Menu);
