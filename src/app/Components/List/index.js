import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Grid,
  Modal,
  Backdrop,
  ImageListItem,
  ImageList,
  Box,
  Typography,
  Fade,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import code1 from "../../public/images/code1.png";
import code2 from "../../public/images/code2.png";
import code3 from "../../public/images/code3.png";
import code4 from "../../public/images/code4.png";
import code5 from "../../public/images/code5.png";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    borderRadius: "20px",
    cursor: "pointer",
  },
  gridItem: {
    padding: "10px",
    boxSizing: "border-box",
  },
}));

const itemData = [
  {
    img: code1,
    title: "Bed",
    id: 1,
  },
  { img: code5, title: ".", id: 5 },
  {
    img: code2,
    title: "Books",
    id: 2,
  },
  {
    img: code3,
    title: "Bed",
    id: 3,
  },
  {
    img: code4,
    title: "Books",
    id: 4,
  },
];
const List = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({ img: "1", title: "1" });
  const handleOpen = (id) => {
    setOpen(true);
    const item = itemData.find((item) => item.id == id);
    if (item) {
      setItem(item);
    }
    console.log(item);
  };
  const handleClose = () => setOpen(false);
  return (
    <Grid container direction="column" style={{ height: "fit-content" }}>
      <Grid item>
        <Box sx={{ width: "100%", height: "max-content" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item, index) => (
              <ImageListItem
                key={index}
                className={classes.image}
                onClick={() => handleOpen(item.id)}
              >
                <Image
                  src={item.img}
                  key={index}
                  style={{ borderRadius: "20px" }}
                  alt={item.title}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50vw",
                  padding: 0,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 1,
                  borderRadius: "20px",
                }}
              >
                <Image
                  id="transition-modal-title"
                  src={item.img}
                  style={{ borderRadius: "20px", width: "100%" }}
                  alt={item.title}
                />
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Grid>
    </Grid>
  );
};

export default List;
