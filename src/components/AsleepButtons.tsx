import React from 'react';

import AsleepView from '../styles/AsleepView';
import SmallButton from '../styles/SmallButton';
import { CoreEntry } from '../types';

type PropertyTypes = {
  entries: CoreEntry<Date>[];
};

function AsleepButtons({ entries }: PropertyTypes): JSX.Element {
  const lastEntry = entries[entries.length - 1].core;
  const secondsIndex = -3;
  const sleepTime: string = lastEntry.startTime
    .toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    .slice(0, secondsIndex);

  return (
    <AsleepView>
      <>{`In bed at ${sleepTime}.`}</>
      <SmallButton onPress={() => undefined} title="Neg nap" />
    </AsleepView>
  );
}

export default AsleepButtons;
