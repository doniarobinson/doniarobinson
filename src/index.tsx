import ReactDOM from "react-dom";
import { App } from "./App";
import { mergeStyles } from "@fluentui/merge-styles/lib/mergeStyles";

// Inject some global styles
mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
    backgroundColor: "#EFEFF0",
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
