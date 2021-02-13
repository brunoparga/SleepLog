type Time<T> = { awake: boolean; time: T };

type ButtonsState = {
  times: Time<Date>[];
  setTimes: React.Dispatch<React.SetStateAction<Time<Date>[]>>;
  awake: boolean;
  setAwake: React.Dispatch<React.SetStateAction<boolean>>;
};

type Children = { children: JSX.Element[] };

export type { ButtonsState, Children, Time };
