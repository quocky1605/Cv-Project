import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import DarkModeButton from "../DarkModeButton";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const NavMenuDesktop = ({ colorMode, pages, setCheckDirect, checkDirect }) => {
  const router = useRouter();
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const { pathname } = useRouter();
  const checkPath = (path) => {
    if (pathname == path) {
      return true;
    }
    return false;
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const routePush = (path) => {
    router.push(path);
  };
  return (
    <AppBar
      position="static"
      style={{ backgroundImage: "none" }}
      sx={{ bgcolor: "background.default", color: "text.primary" }}
      className={classes.appbar}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <PetsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={() => routePush("/")}
            cursor="pointer"
          />
          <Typography
            variant="h6"
            noWrap
            onClick={() => routePush("/")}
            sx={{
              ml: 1,
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            MM Developer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  sx={{ width: "10em" }}
                  onClick={() => {
                    sessionStorage.setItem(
                      "scrollPosition",
                      window.pageYOffset
                    );
                    handleCloseNavMenu;
                    routePush(page.path);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            onClick={() => routePush("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",

              cursor: "pointer",
            }}
          >
            MM Developer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                disableRipple
                className={classes.button}
                onClick={(e) => {
                  handleCloseNavMenu;
                  sessionStorage.setItem("scrollPosition", window.pageYOffset);
                  // setCheckDirect(true);
                  routePush(page.path);
                }}
                style={{
                  backgroundColor: checkPath(page.path) ? "#f2c268" : null,
                }}
                sx={{
                  display: "block",
                  color: "text.primary",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <DarkModeButton colorMode={colorMode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavMenuDesktop;
