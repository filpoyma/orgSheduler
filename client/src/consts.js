export const GROUPS = {
  groups: 'groups',
  pairs: 'pairs',
  solo: 'solo'
};

export const DAYS = ["mon", "tue", "wed", "thu", "fri"];

export const DAYTORU = {
  "mon": 'пн.',
  "tue": 'вт.',
  "wed": 'ср.',
  "thu": 'чт.',
  "fri": 'пт.',
};

const days = Object.fromEntries(DAYS.map((day)=>([[day], GROUPS.solo])));

const offSoloDays = {
  w1: days,
  w2: days,
  w3: days,
};

const onSoloDays = {
  w1: days,
  w2: days,
  w3: days,
  w4: days,
};

export const schemaInit = {
  offline: offSoloDays,
  online: onSoloDays,
};

export const PEOPLE_PER_PAIR = 2;
export const PEOPLE_PER_GR = 3;
export const MAX_NUMS_PHASES = 3;


