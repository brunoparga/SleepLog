type Time<T> = { awake: boolean; time: T };

type ButtonsState = {
  times: Time<Date>[];
  setTimes: React.Dispatch<React.SetStateAction<Time<Date>[]>>;
  awake: boolean;
  setAwake: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { ButtonsState, Time };