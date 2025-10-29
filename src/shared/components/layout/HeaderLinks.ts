export interface HeaderLink {
  name: string;
  path: string;
}

export const headerLinks: HeaderLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];
