import { useSetRecoilState } from "recoil";
import { ContextMenuStore } from "./ContextMenuStore";
import type { ContextMenuItemType } from "./type";

const useContextMenuAction = (items: ContextMenuItemType[]) => {
  const set = useSetRecoilState(ContextMenuStore);

  const onContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    const { clientX, clientY } = event;

    set({
      isOpen: true,
      position: { x: clientX, y: clientY },
      items,
    });
  };

  const close = () => {
    set({
      isOpen: false,
      position: { x: 0, y: 0 },
      items: [],
    });
  };

  return { onContextMenu, close };
}

export default useContextMenuAction;
