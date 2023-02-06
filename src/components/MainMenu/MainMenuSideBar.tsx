import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { MainMenuSideBarItems, MainMenuSideBarProps } from "./MenuSideBarProps";
import { useNavigate } from "react-router";

export default function MainMenuSideBar(props: MainMenuSideBarProps) {
  const { /* items, */ selectedIndex, setSelectedIndex } = props;
  const navigate = useNavigate();
  const quickStartItems: MainMenuSideBarItems[] = [
    {
      label: "Getting started",
      index: 0,
      onClick: () => navigate("/getting-started"),
    },
    {
      label: "Usage -  Basic & Advanced example",
      index: 1,
      onClick: () => navigate("/usage"),
    },
  ];
  const Regularitems: MainMenuSideBarItems[] = [
    {
      //Icon: <FileOpenIcon />,
      label: "Components",
      index: 2,
      subMenu: [
        {
          label: "Dropzone",
          index: 3,
          onClick: () => navigate("/components/dropzone"),
        },
        {
          label: "FileMosaic",
          index: 4,
          onClick: () => navigate("/components/filemosaic"),
        },
        {
          label: "FileCard",
          index: 5,
          onClick: () => navigate("/components/file-card"),
        },
      ],
    },
    {
      // Icon: <DocumentScannerIcon />,
      label: "API documentation",
      index: 6,
      subMenu: [
        {
          label: "Dropzone",
          index: 5,
          onClick: () => navigate("/api/dropzone"),
        },
        {
          label: "FileMosaic",
          index: 6,
          onClick: () => navigate("/api/filemosaic"),
        },
        {
          label: "FileCard",
          index: 7,
          onClick: () => navigate("/api/file-card"),
        },
      ],
    },
    {
      label: "Server side",
      index: 7,
      onClick: () => navigate("/server-side"),
    },
    {
      label: "Code Generator",
      index: 8,
      onClick: () => navigate("/code-generator"),
    },
    { label: "Types", index: 9, onClick: () => navigate("/types") },

    {
      label: "Utilities Methods",
      index: 10,
      onClick: () => navigate("/utilities-methods"),
    },
  ];

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCLickItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    onClick: Function | undefined
  ): void => {
    onClick?.();
  };

  //const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    onClick: Function | undefined,
    withSubMenu?: boolean
  ) => {
    setSelectedIndex(index);
    if (!withSubMenu) {
      onClick?.();
    }
  };

  return (
    <React.Fragment>
      <List
        sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Quick Start
          </ListSubheader>
        }
      >
        {quickStartItems &&
          quickStartItems.map(
            ({ Icon, label, onClick, index, subMenu }, indexBase) => (
              <React.Fragment key={indexBase}>
                <ListItemButton
                  style={{ padding: "2px 20px" }}
                  key={indexBase}
                  selected={subMenu === undefined && selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      index,
                      onClick,
                      subMenu !== undefined
                    )
                  }
                >
                  {Icon && (
                    <ListItemIcon
                      style={{ minWidth: "30px", marginLeft: "5px" }}
                    >
                      {Icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={label || ""}
                    primaryTypographyProps={{ fontWeight: "600" }}
                  />
                </ListItemButton>

                {subMenu && (
                  <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    key={"collapse-submenu" + indexBase}
                  >
                    <List component="div" disablePadding>
                      {subMenu.map(
                        ({ Icon, label, onClick, index }, index2) => (
                          <ListItemButton
                            sx={{ pl: 4 }}
                            selected={selectedIndex === index}
                            key={index2 + indexBase}
                            onClick={(event) =>
                              handleListItemClick(event, index, onClick)
                            }
                          >
                            {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
                            <ListItemText primary={label || ""} />
                          </ListItemButton>
                        )
                      )}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            )
          )}
      </List>
      <List
        sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Full documentation
          </ListSubheader>
        }
      >
        {Regularitems &&
          Regularitems.map(
            ({ Icon, label, onClick, index, subMenu }, indexBase) => (
              <React.Fragment key={indexBase}>
                <ListItemButton
                  style={{ padding: "2px 20px" }}
                  key={indexBase}
                  selected={subMenu === undefined && selectedIndex === index}
                  onClick={(event) =>
                    handleListItemClick(
                      event,
                      index,
                      onClick,
                      subMenu !== undefined
                    )
                  }
                >
                  {Icon && (
                    <ListItemIcon
                      style={{ minWidth: "30px", marginLeft: "5px" }}
                    >
                      {Icon}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={label || ""}
                    primaryTypographyProps={{ fontWeight: "600" }}
                  />
                </ListItemButton>

                {subMenu && (
                  <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    key={"collapse-submenu" + indexBase}
                  >
                    <List component="div" disablePadding>
                      {subMenu.map(
                        ({ Icon, label, onClick, index }, index2) => (
                          <ListItemButton
                            sx={{ pl: 4 }}
                            selected={selectedIndex === index}
                            key={index2 + indexBase}
                            onClick={(event) =>
                              handleListItemClick(event, index, onClick)
                            }
                          >
                            {Icon && <ListItemIcon>{Icon}</ListItemIcon>}
                            <ListItemText primary={label || ""} />
                          </ListItemButton>
                        )
                      )}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            )
          )}
      </List>
    </React.Fragment>
  );
}
