import Menu from "./Menu";
import styleFooter from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styleFooter.rodape}>
      <address className={styleFooter.address}>
        AV. Andarai 531 - Porto Alegre
      </address>

      <Menu />
    </footer>
  );
};

export default Footer;
