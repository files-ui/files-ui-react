import List from "@mui/material/List/List";
import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import * as React from "react";
import { RightMenuProps } from "./RightMenuProps";
import "./RightMenu.scss";
const RightMenu: React.FC<RightMenuProps> = (props: RightMenuProps) => {
  const { items, width, selectedItemProp: selectedItem = 0 } = props;

  const handleClickAnchor = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    onClick: Function | undefined,
    id: number
  ) => {
    onClick?.();

  };

  const finalSelectedId = selectedItem;
  return (
    <List
      // className="section-container"
      sx={{ width: "100%", maxWidth: width, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Content
        </ListSubheader>
      }
    >
      <ul style={{ listStyle: "none", margin: 0 }}>
        {items &&
          items.map(({ isSelected, label, onClick, referTo, id }, index) => {
            const classNameForAnchor: string =
              finalSelectedId === id
                ? "right-menu-anchor-item selected"
                : "right-menu-anchor-item";
            return (
              <li key={index} style={{ listStyle: "none", margin: 0 }}>
                <a
                  className={classNameForAnchor}
                  href={`${referTo}`}
                  onClick={(e) => handleClickAnchor(e, onClick, id)}
                >
                  {label}
                </a>
              </li>
            );
          })}
      </ul>
    </List>
  );
};
export default RightMenu;
