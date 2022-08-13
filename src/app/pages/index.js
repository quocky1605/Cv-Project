import {} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import avatar from "../public/images/avatar.png";

const useStyles = makeStyles((theme) => ({
  hello: {
    fontFamily: "Raleway",
    marginTop: "0em",
    width: "fit-content",
    height: "fit-content",
    fontWeight: "bolder",
    borderRadius: "10px",
    margin: "auto",
    textAlign: "center",
    lineHeight: "50px",
    alignItems: "center",
    padding: "10px 30px 10px 30px",
    boxSizing: "border-box",
    lineHeight: "2",
    backgroundColor: "#8080804d",
    [theme.breakpoints.down("sm")]: {},
  },
  name: {
    fontWeight: "bolder",
    marginBottom: "10px",
    fontSize: "1.5em",
  },
  avatar: {
    borderRadius: "100%",
  },
  title: {
    fontWeight: "bolder",
    letterSpacing: "7px",
    width: "fit-content",
    fontWeight: "bolder",
    paddingBottom: "5px",
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
  content: {
    textIndent: "40px",
    letterSpacing: "2px",
    marginTop: "1em",
    textAlign: "justify",
    textJusity: "distribute",
  },
  link: {
    fontWeight: "bolder",
    letterSpacing: "5px",
    width: "fit-content",
    fontWeight: "bolder",
    color: theme.palette.background.default,
    padding: "4px 7px 4px 7px",
    borderRadius: "10px",
    backgroundColor: theme.palette.text.primary,
    transition: "0.2s",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: "#f2c268",
    },
  },
  years: {
    fontWeight: "900",
    fontSize: "26px",
    marginRight: "2em",
    width: "fit-content",
    height: "fit-content",
  },
  bio: {
    textAlgin: "justify",
    textJusity: "distribute",
  },
  buttonSM: {
    fontSize: "20px",
    marginTop: "2em",
    padding: "10px 40px",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: "#f2c268",
    },
  },
  icon: {
    marginRight: "0.5em",
    cursor: "pointer",
  },
  textIcon: {
    cursor: "pointer",
    display: "inline-block",
  },
}));

const Home = () => {
  const route = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [color, setColor] = useState(theme.palette.background.default);
  const [checkDirect, setCheckDirect] = useState(false);
  useEffect(() => setColor(theme.palette.background.default), []);

  const Avatar = () => {
    return (
      <Image
        src={avatar}
        alt="avatar"
        className={classes.avatar}
        width="200px"
        height="200px"
      />
    );
  };

  return (
    <Grid container direction="column">
      <Grid item style={{ jusityContent: "center", textAlign: "center" }}>
        <Box className={classes.hello}>
          My code DOESN{"’"}T work, I have no idea why. My code WORKS, I have no
          idea why.
        </Box>
      </Grid>

      <Grid container direction="row" mt={5} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" className={classes.name}>
            QUOC KY NGUYEN
          </Typography>
          <Typography variant="subtitle1">Fullstack Developer</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          {" "}
          <Avatar />
        </Grid>
      </Grid>

      <Grid item mt={5}>
        <Typography variant="h4" className={classes.title}>
          Works
        </Typography>
        <Typography variant="subtitle1" mt={1} className={classes.content}>
          I{"'"}m Front-end Developer have experienced with PHP, JavaScript for
          2 years. So you can see that i have built this web by using Nextjs,
          Material UI and the most important thing is StackOveflows 🤣. I hope
          you love this project.Visit my{" "}
          <span className={classes.link}>
            <a href="https://github.com/quocky1605 ">Github</a>
          </span>
        </Typography>
        <Grid container justifyContent="center">
          <Button
            className={classes.buttonSM}
            onClick={() => {
              sessionStorage.setItem("scrollPosition", window.pageYOffset);
              setCheckDirect(true);
              route.push("/about");
            }}
            sx={{ bgcolor: "text.primary", color: "background.default" }}
          >
            See more
          </Button>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "5em" }}>
        <Typography variant="h4" className={classes.title}>
          Bio
        </Typography>
        <Typography variant="subtitle1" mt={3} className={classes.bio}>
          <span className={classes.years}> 2001</span>Born in BuonMeThuot
          {" (DakLak) "}VietNam
        </Typography>
        <Typography variant="subtitle1" className={classes.bio}>
          <span className={classes.years}> 2002 to present</span> No
          achievements except eat and sleep eat and sleep at the same time each
          day.
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: "5em" }}>
        <Typography variant="h4" className={classes.title}>
          Links
        </Typography>

        <Grid container direction="column" mt={3} spacing={3}>
          <Grid
            item
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            href="https://www.facebook.com/kymy2316"
            fontSize="large"
            rel="noopener noreferrer"
            target="_blank"
            component={"a"}
          >
            <LocalPhoneIcon className={classes.icon} />
            <Typography variant="h5" className={classes.textIcon}>
              0965086576
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            href="https://www.facebook.com/kymy2316"
            fontSize="large"
            rel="noopener noreferrer"
            target="_blank"
            component={"a"}
          >
            <FacebookIcon className={classes.icon} />
            <Typography variant="h5" className={classes.textIcon}>
              Facebook
            </Typography>
          </Grid>
          <Grid
            item
            mt={1}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            href="https://www.instagram.com/_richardwatterson165/"
            fontSize="large"
            rel="noopener noreferrer"
            target="_blank"
            component={"a"}
          >
            <InstagramIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" className={classes.textIcon}>
              Instagram
            </Typography>
          </Grid>
          <Grid
            item
            mt={1}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            href="https://www.linkedin.com/in/nguyễn-quốc-kỳ-906545220/"
            fontSize="large"
            rel="noopener noreferrer"
            target="_blank"
            component={"a"}
          >
            <LinkedInIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" className={classes.textIcon}>
              Linkedln
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
