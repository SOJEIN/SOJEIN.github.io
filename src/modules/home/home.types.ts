export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export interface ActionButton {
  labelKey: string;
  href: string;
  variant: 'primary' | 'secondary';
  download?: boolean;
}
