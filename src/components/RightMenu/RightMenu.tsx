import List from "@mui/material/List/List";
import ListSubheader from "@mui/material/ListSubheader/ListSubheader";
import * as React from "react";
import { RightMenuProps } from "./RightMenuProps";
import "./RightMenu.scss";
import { UserContext } from "../../globals/contexts/UserContext";
const RightMenu: React.FC<RightMenuProps> = (props: RightMenuProps) => {
  const { items, width, selectedItemProp: selectedItem = 0 } = props;
  const [usuario, dispatch] = React.useContext(UserContext);
  const darkMode = usuario.darkMode;

  const handleClickAnchor = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    onClick: Function | undefined,
    id: number
  ) => {
    onClick?.();
  };

  const finalSelectedId = selectedItem;

  const darkmodeClassName = darkMode
    ? "right-menu-anchor-item darkmode"
    : "right-menu-anchor-item";
  //const darkmodeClassName = darkMode?"":"";
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
                ? `${darkmodeClassName} selected`
                : darkmodeClassName;
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
