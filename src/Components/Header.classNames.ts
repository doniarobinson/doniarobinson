import { mergeStyleSets } from "@fluentui/merge-styles/lib/mergeStyleSets";

export interface IComponentClassNames {
  banner: string;
  bannerImg: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    banner: {
      backgroundColor: "#35B0AB",
      textAlign: "center",
    },
    bannerImg: {
      maxWidth: "100%",
      maxHeight: "200px",
    },
  });
};
