import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <span className="footer-info">
          <p>DR &copy;2023</p>
        </span>
        <span>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.linkedin.com/in/doniarobinson/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon fontSize="medium" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/doniarobinson"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="medium" />
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
