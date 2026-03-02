export interface HeaderLink {
  name: string;
  path: string;
}

export const headerLinks: HeaderLink[] = [
  { name: 'Home', path: '#hero' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
];
