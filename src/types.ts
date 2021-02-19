type BasicEntry<T extends Date | string> = { startTime: T; endTime?: T };

type CoreEntry<T extends Date | string> = {
  core: BasicEntry<T>;
  naps?: BasicEntry<T>[];
  negativeNaps?: BasicEntry<T>[];
};

type ButtonsState = {
  entries: CoreEntry<Date>[];
  setEntries: React.Dispatch<React.SetStateAction<CoreEntry<Date>[]>>;
  awake: boolean;
  setAwake: React.Dispatch<React.SetStateAction<boolean>>;
};

type Children = { children: JSX.Element[] };

type ToDelete = {
  numberOfEntries: number;
  setEntries: React.Dispatch<React.SetStateAction<CoreEntry<Date>[]>>;
};

export type { BasicEntry, ButtonsState, Children, CoreEntry, ToDelete };
