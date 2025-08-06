export type SubmenuItem = {
  id: number;
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};

export type HeaderItem = {
  id: number;
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};
