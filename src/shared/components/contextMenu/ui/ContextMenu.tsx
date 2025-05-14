/** @jsxImportSource @emotion/react */

import { useRecoilValue } from "recoil";
import type { ContextMenuItemType } from "../model/type";
import { contextMenuStyles } from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";
import { ContextMenuStore } from "../model/ContextMenuStore";

function ContextMenu() {
  const { container } = contextMenuStyles;
  const { isOpen, position, items } = useRecoilValue(ContextMenuStore);

  if (!isOpen) return null;

  return (
    <div css={container(position)}>
      {items.map((item: ContextMenuItemType, index) => (
        <ContextMenuItem
          key={`${item.label}-${index}`}
          label={item.label}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default ContextMenu;
