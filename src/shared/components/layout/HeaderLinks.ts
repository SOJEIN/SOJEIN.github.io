export interface HeaderLink {
  nameKey: string;
  path: string;
}

export const headerLinks: HeaderLink[] = [
  { nameKey: 'nav.home', path: '#hero' },
  { nameKey: 'nav.about', path: '#about' },
  { nameKey: 'nav.experience', path: '#experience' },
  { nameKey: 'nav.projects', path: '#projects' },
  { nameKey: 'nav.contact', path: '#contact' },
];
