import { mergeStyleSets } from "@fluentui/merge-styles/lib/mergeStyleSets";

export interface IComponentClassNames {
  sectionStyles: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    sectionStyles: {
      backgroundColor: "#BFBCCB",
      padding: "10px 0",
    },
  });
};
