import React from "react";
import { getClassNames } from "./App.classNames";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  IStackStyles,
  IStackItemStyles,
  ITextStyles,
} from "@fluentui/react";

import Header from "./Components/Header";
// import SiteNav from "./Components/SiteNav";
import PhotoGallery from "./Components/PhotoGallery";
// import { DefaultPalette } from "@fluentui/react/lib/Styling";

const boldStyle: Partial<ITextStyles> = {
  root: { fontWeight: FontWeights.semibold },
};
const stackTokens: IStackTokens = { childrenGap: 5 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    margin: "0",
  },
};

const headerStyle: IStackItemStyles = {
  root: {
    backgroundColor: "#35B0AB",
    textAlign: "center",
  },
};

/*<Text variant="xxLarge" styles={boldStyle}>
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
  </Stack>*/

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Stack enableScopedSelectors tokens={stackTokens} styles={stackStyles}>
        <Stack.Item align="stretch" styles={headerStyle}>
          <Header />
        </Stack.Item>
      </Stack>

      <PhotoGallery />
    </>
  );
};
