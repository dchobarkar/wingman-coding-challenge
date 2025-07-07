export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface NavTab {
  id: string;
  label: string;
  href: string;
  icon: string;
  isActive?: boolean;
}
