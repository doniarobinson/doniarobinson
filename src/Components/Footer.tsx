import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s4">
            <h4>Contact</h4>
          </div>
          <div className="footer-col col s1">
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="footer-copyright"></div>
    </footer>
  );
};

export default Footer;
