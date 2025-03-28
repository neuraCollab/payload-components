import * as migration_20250328_210230 from './20250328_210230';

export const migrations = [
  {
    up: migration_20250328_210230.up,
    down: migration_20250328_210230.down,
    name: '20250328_210230'
  },
];
