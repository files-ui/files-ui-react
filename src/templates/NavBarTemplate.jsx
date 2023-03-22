import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logoLight from "../static/files-ui-logo-blue-wbg.png";
import logo_blue from "../static/files-ui-logo-blue.png";
import { IconButton, Stack, styled, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeLightModeButton from "../components/MainPage/DarkModeLightModeButton";
import MainMenuSideBar from "../components/MainMenu/MainMenuSideBar";
import logo_text_blue from "../static/files-ui-logo-text-med.png";
import logo_text_blue_dark from "../static/files-ui-logo-text-med-dark.png";

const drawerWidth = 280;
const StyledImage = styled("img")(({ theme }) => ({
  height: "100%",
  maxHeight: "40px",
  marginRight: "10px",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
function NavBarTemplate(props) {
  //const navigate = useNavigateToTop();
  const { window, children, darkModeOn, handleDarkMode, selectedIndex } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleGoGitRepo = () => {
    window.open("https://github.com/files-ui", "_blank");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div 
   
    >
      <Toolbar>
        <a href="/" style={{ textDecoration: "none" }}>
          <Stack
            direction={"row"}
            alignItems="center"
            sx={{ "&:hover": { cursor: "pointer" } }}
            // onClick={() => navigate("/")}
          >
            <img
              style={{
                height: "40px",
                marginRight: "5px",
              }}
              className="filesui-nav-logo"
              src={!darkModeOn ? logo_blue : logoLight}
              alt="files-ui-main-logo"
            />
            <img
              src={darkModeOn ? logo_text_blue_dark : logo_text_blue}
              alt="files-ui-main-logo-text"
              height={16}
            />
            {/*   <Typography variant="h6" noWrap component="div" color="primary">
              Files ui
            </Typography> */}
          </Stack>
        </a>
      </Toolbar>

      <Divider />

      <MainMenuSideBar
        //setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        //items={}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <CssBaseline />
      <AppBar
       className="section-container"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "rgba(255,255,255,0.7)",
          //color: "skyblue",
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <StyledImage
            src={!darkModeOn ? logo_blue : logoLight}
            alt="files-ui-main-logo"
          />

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="primary"
            sx={{ display: { sm: "none" } }}
          >
            Files ui
          </Typography>
          <Box style={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={1}>
            <Tooltip title="Go to Files-ui GitHub repo">
              <IconButton
                style={{ borderRadius: "8px", border: "0.5px solid #eaeef3" }}
                onClick={handleGoGitRepo}
                color="secondary"
                aria-label="upload picture"
                component="label"
              >
                <GitHubIcon /* htmlColor="white" */ />
              </IconButton>
            </Tooltip>
            <DarkModeLightModeButton
              darkModeOn={darkModeOn}
              onChangeDarkMode={handleDarkMode}
            />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 3 },
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            //md: `calc(100% - ${240}px)`,
          },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}

export default NavBarTemplate;
