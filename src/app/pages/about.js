import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import codeExample from "../public/images/code.png";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "fit-content",
  },
  title: {
    fontWight: "bolder",
    letterSpacing: "3px",
  },
  content: {
    textIndent: "25px",
    letterSpacing: "2px",
  },
  link: {
    fontWeight: "bolder",
    letterSpacing: "5px",
    width: "fit-content",
    fontWeight: "bolder",
    marginLeft: "10px",
    color: theme.palette.background.default,
    padding: "5px",
    borderRadius: "10px",

    backgroundColor: theme.palette.text.primary,
    transition: "0.2s",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: "#f2c268",
    },
  },
  linkIntro: {
    textAlign: "center",
    textJutify: "center",
  },
  card: {
    backgroundColor: "white",
    color: "black",
    boxSizing: "border-box",
  },
  viewmore: {
    fontWeight: "bolder",
    letterSpacing: "5px",
    width: "fit-content",
    fontWeight: "bolder",
    marginLeft: "20px",
    color: theme.palette.background.default,
    padding: "10px",
    borderRadius: "10px",

    backgroundColor: theme.palette.text.primary,
    transition: "0.2s",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: "#f2c268",
    },
  },
  gridContainer2: {
    position: "absolute",
  },
}));

const gridContainer = {
  hidden: {
    y: "50px",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const About = ({ checkDirect, setCheckDirect }) => {
  const route = useRouter();
  useEffect(() => {
    setCheckDirect(false);
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

  const redirect = (e) => {
    e.preventDefault();
    setCheckDirect(true);
    setTimeout(() => {
      setCheckDirect(false);
      route.push("/blog");
    }, 1000);
  };
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container direction="column">
      <Grid
        item
        component={motion.div}
        variants={gridContainer}
        initial={checkDirect ? "show" : "hidden"}
        animate={checkDirect ? "hidden" : "show"}
      >
        <Typography variant="h5" mt={1} className={classes.title}>
          About Me
        </Typography>
        <Typography variant="subtitle1" mt={1} className={classes.content}>
          - I{"'"}m Front-end Developer. Well-versed in numerous programming
          languages including PHP OOP, JavaScript. I{"'"}ve knowledge of:
        </Typography>
        <Typography variant="subtitle2" mt={1} className={classes.content}>
          + JavaScript Library/Framework: Nextjs,Reactjs
        </Typography>
        <Typography variant="subtitle2" className={classes.content}>
          + Php Framework: Laravel,
        </Typography>
        <Typography variant="subtitle2" className={classes.content}>
          + Css Framework: Material UI, Ant Design, Bootstrap,...
        </Typography>
        <Grid item>
          <Typography variant="h5" mt={5} className={classes.linkIntro}>
            You also can check all my project by
          </Typography>{" "}
          <Typography variant="h6" className={classes.linkIntro}>
            Visit my
            <span className={classes.link}>
              <a
                href="https://github.com/quocky1605 "
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Github
              </a>
            </span>
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "5em" }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5">
                Tools that i{"'"}ve used to build this Web:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">- NextJs</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">- Material UI</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">- Framer Motion</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: "5em" }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <Typography variant="h5">Code From My Project:</Typography>
                </Grid>
                <Grid item>
                  <Button
                    disableRipple
                    className={classes.viewmore}
                    onClick={(e) => {
                      sessionStorage.setItem(
                        "scrollPosition",
                        window.pageYOffset
                      );
                      redirect(e);
                    }}
                  >
                    View more code
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item mt={3}>
              <Image src={codeExample} style={{ borderRadius: "20px" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
