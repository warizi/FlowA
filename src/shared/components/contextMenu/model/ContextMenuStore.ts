import { atom } from "recoil";
import type { ContextMenuStoreType } from "./type";

export const ContextMenuStore = atom<ContextMenuStoreType>({
  key: "ContextMenuStore",
  default: {
    isOpen: false,
    position: { x: 0, y: 0 },
    items: [],
  },
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const handleClick = () => {
        setSelf({
          isOpen: false,
          position: { x: 0, y: 0 },
          items: [],
        });
      };

      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    },
  ],
});
