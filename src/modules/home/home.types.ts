// ============================================
// TIPOS Y CONSTANTES PARA EL MÓDULO HOME
// ============================================

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export interface ActionButton {
  label: string;
  to: string;
  variant: 'primary' | 'secondary';
}
