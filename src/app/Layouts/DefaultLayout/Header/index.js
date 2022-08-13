import { useContext } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NavMenu from "../../../Components/NavMenuDesktop";

const useStyles = makeStyles((theme) => ({
  header: {},
}));
const pages = [{ path: "/about", name: "About" }];
const Header = ({ ColorModeContext, setCheckDirect }) => {
  const classes = useStyles();
  const colorMode = useContext(ColorModeContext);
  return (
    <Grid container className={classes.header}>
      <NavMenu
        colorMode={colorMode}
        pages={pages}
        setCheckDirect={setCheckDirect}
      />
    </Grid>
  );
};

export default Header;
