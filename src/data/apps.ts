export type KnicsApp = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  href: string;
  accent: string;
  status: 'live' | 'building';
};

const env = import.meta.env;

export const knicsApps: KnicsApp[] = [
  {
    id: 'roots',
    name: 'Our Roots',
    tagline: 'Family trees that stay connected',
    description:
      'Map relationships across generations, join trees through marriage, and keep birthdays and anniversaries in one place.',
    category: 'Family',
    href: env.VITE_APP_ROOTS_URL || 'https://roots.sknics.com',
    accent: '#2f6a52',
    status: 'live',
  },
  {
    id: 'between',
    name: 'Between',
    tagline: 'Multiplayer card nights, online',
    description:
      'Host a room, ante the board, and bet that the next draw falls between your cards — with live scores that can swing either way.',
    category: 'Games',
    href: env.VITE_APP_BETWEEN_URL || 'https://cards.sknics.com',
    accent: '#00abf4',
    status: 'live',
  },
  {
    id: 'claw',
    name: 'Claw',
    tagline: 'Personal AI that stays on task',
    description:
      'Reminders, schedules, news digests, and memory for the people who matter — delivered through chat and Telegram.',
    category: 'Intelligence',
    href: env.VITE_APP_CLAW_URL || 'https://claw.sknics.com',
    accent: '#d4a017',
    status: 'live',
  },
  {
    id: 'fin-goat',
    name: 'Fin Goat',
    tagline: 'All investments in one glance',
    description:
      'Track stocks, mutual funds, EPF, FDs, gold, and real estate. Screen the market and get alerts that matter.',
    category: 'Wealth',
    href: env.VITE_APP_FINGOAT_URL || 'https://finance.sknics.com',
    accent: '#1d6b73',
    status: 'building',
  },
];
