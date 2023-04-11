import { mergeStyleSets } from "@fluentui/merge-styles/lib/mergeStyleSets";

export interface IComponentClassNames {
  bannerImg: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    bannerImg: {
      maxWidth: "100%",
      maxHeight: "150px",
    },
  });
};
