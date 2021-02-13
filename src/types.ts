type BasicEntry = { startTime: Date; endTime?: Date };

type CoreEntry = {
  core: BasicEntry;
  naps?: BasicEntry[];
  negativeNaps?: BasicEntry[];
};

type ButtonsState = {
  entries: CoreEntry[];
  setEntries: React.Dispatch<React.SetStateAction<CoreEntry[]>>;
  awake: boolean;
  setAwake: React.Dispatch<React.SetStateAction<boolean>>;
};

type Children = { children: JSX.Element[] };

export type { BasicEntry, ButtonsState, Children, CoreEntry };
