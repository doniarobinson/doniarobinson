import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 200,
    height: "calc(100vh - 110px)",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "https://doniarobinson.com",
        expandAriaLabel: "Go to site home page",
        isExpanded: false,
      },
      {
        name: "Photo Galleries",
        url: "/galleries.html",
        expandAriaLabel: "Go to the photo gallery main page",
        isExpanded: false,
      },
    ],
  },
];

const SiteNav: React.FunctionComponent = () => {
  return (
    <Nav
      selectedKey="key1"
      ariaLabel="Navigation"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

export default SiteNav;
