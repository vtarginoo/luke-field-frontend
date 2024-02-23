export interface INavItem {
  label?: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: INavItem[];
  path?: string;
}
