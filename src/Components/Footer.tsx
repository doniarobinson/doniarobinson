import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <span className="footer-info">
          <h5>DR &copy;2023</h5>
        </span>
        <span className="footer-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/doniarobinson/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/doniarobinson"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
