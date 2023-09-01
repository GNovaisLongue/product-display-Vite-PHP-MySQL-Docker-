import "./styles.css";

interface FooterProps {
  children: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <div className="footer-div" />
      <hr />
      <p className="footer-paragraph">{props.children}</p>
    </>
  );
};

export default Footer;
