export type ContextMenuItemType = {
  label: string;
  onClick: () => void;
};

export type ContextMenuStoreType = {
  isOpen: boolean;
  position: { x: number; y: number };
  items: ContextMenuItemType[];
}