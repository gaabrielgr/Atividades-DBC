import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Footer = () => {
  const { isLogged } = useContext<any>(AuthContext);
  return (
    <>
      {isLogged && (
        <footer>
          <div>footer</div>
        </footer>
      )}
    </>
  );
};

export default Footer;
