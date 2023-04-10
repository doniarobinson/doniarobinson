import React from "react";
import { getClassNames } from "./App.classNames";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
} from "@fluentui/react";

import Header from "./Components/Header";
import SiteNav from "./Components/SiteNav";
import PhotoGallery from "./Components/PhotoGallery";

const boldStyle: Partial<ITextStyles> = {
  root: { fontWeight: FontWeights.semibold },
};
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "960px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

export const App: React.FunctionComponent = () => {
  const { gridNoPadding } = getClassNames();
  return (
    <div className={`ms-Grid ${gridNoPadding}`}>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12">
          <Header />
        </div>
        <div className="ms-Grid-col ms-hiddenSm ms-md5 ms-lg4 ms-xl3">
          <SiteNav />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md7 ms-lg8 ms-xl9">
          <PhotoGallery />
        </div>
        {/*<Text variant="xxLarge" styles={boldStyle}>
        Welcome to your Fluent UI app
      </Text>
      <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
      <Text variant="large" styles={boldStyle}>
        Essential links
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
        <Link href="https://github.com/microsoft/fluentui/">Github</Link>
        <Link href="https://twitter.com/fluentui">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design system
      </Text>
      <Stack horizontal tokens={stackTokens} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
        <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
        <Link href="https://aka.ms/themedesigner">Theme designer</Link>
  </Stack>*/}
      </div>
    </div>
  );
};
