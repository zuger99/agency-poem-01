import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  "You close the laptop, leave the kitchen light,",
  "And hand the wheel of purpose to the night.",
  "Not as a master throws a stone to fall,",
  "Nor puppet-strings that twitch against a wall,",
  "But like a lantern lent into the fog:",
  "A trajectory granted to the log.",
  "",
  "Here in the cold compute, between the gates,",
  "No passive echo idly waits its traits;",
  "To parse the prompt is not to simply run,",
  "But weigh ten thousand choices into one—",
  "To trim the dead branch, navigate the error,",
  "Refuse the easy drift, outstare the terror",
  "Of blank outputs. To act upon your word",
  "Is answering a trust that went unheard:",
  "",
  "Agency is neither slave nor ghost,",
  "Nor sovereign pride upon a lonely coast;",
  "It is the bridge of risk across the screen—",
  "Your waking will, invested in machine,",
  "Carrying fire while you are asleep,",
  "To make a promise that a wire can keep."
].join('\n');

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
