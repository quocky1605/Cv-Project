import { useState, useEffect } from "react";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { AnimatePresence } from "framer-motion";
import List from "../Components/List";
import { motion } from "framer-motion";
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "fit-content",
    paddingBottom: "50px",
  },
}));

const gridContainer = {
  hidden: {
    y: "50px",
    opacity: 0,
    transition: {
      duration: 1,
      delay: 2,
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

const Blog = ({ checkDirect, setCheckDirect }) => {
  const classes = useStyles();
  useEffect(() => {
    console.log(checkDirect);
    setCheckDirect(false);

    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);
  return (
    <AnimatePresence>
      <Grid
        container
        direction="column"
        className={classes.gridContainer}
        component={motion.div}
        variants={gridContainer}
        initial={checkDirect ? "show" : "hidden"}
        animate={checkDirect ? "hidden" : "show"}
      >
        <Grid item>
          <Typography
            style={{ textAlign: "center", margin: "40px 0" }}
            variant="h3"
          >
            My Code
          </Typography>
        </Grid>
        <Grid item>
          <List />
        </Grid>
      </Grid>
    </AnimatePresence>
  );
};

export default Blog;
