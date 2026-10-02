import { aliensZombiesRobots } from './aliens-zombies-robots';
import { avenueRose } from './avenue-rose';
import { farManor } from './far-manor';
import { marketplaceMvp } from './marketplace-mvp';
import { nda } from './nda';
import { redoc } from './redoc';
import type { Project } from './types';

export type { Project } from './types';

/** Order of the cards on the main page. */
export const projects: Project[] = [aliensZombiesRobots, redoc, farManor, nda, marketplaceMvp, avenueRose];
