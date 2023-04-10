import { mergeStyleSets } from "@fluentui/merge-styles/lib/mergeStyleSets";

export interface IComponentClassNames {
  gridNoPadding: string;
}

export const getClassNames = (): IComponentClassNames => {
  return mergeStyleSets({
    gridNoPadding: {
      padding: "0 !important",
    },
  });
};
