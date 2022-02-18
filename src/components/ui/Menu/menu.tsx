import { FC, MouseEvent } from 'react';
import { Menu as MenuComponent, MenuItem } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MenuProps {
  anchorEl: SVGSVGElement | null;
  onCloseMenu: () => void;
  onRemoveItem: (key: string | undefined) => void;
  id: string | undefined;
  onClickMenu: (event: MouseEvent<SVGSVGElement>) => void;
}

const Menu: FC<MenuProps> = ({
  anchorEl,
  onCloseMenu,
  id,
  onRemoveItem,
  onClickMenu,
}) => {
  const open = Boolean(anchorEl);

  return (
    <>
      <MoreVertIcon
        sx={{ color: 'black', cursor: 'pointer' }}
        onClick={(event) => onClickMenu(event)}
      />
      <MenuComponent anchorEl={anchorEl} open={open} onClose={onCloseMenu}>
        <MenuItem onClick={() => onRemoveItem(id)}>Remove</MenuItem>
      </MenuComponent>
    </>
  );
};

export default Menu;
