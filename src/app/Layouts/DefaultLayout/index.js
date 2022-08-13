import { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import catTyping from "../../public/images/giphy.gif";

export default function DefaultLayout(props) {
  const route = useRouter();
  const [checkDirect, setCheckDirect] = useState(false);

  const { component: Component, ColorModeContext: ColorModeContext } = props;

  const CatTyping = () => {
    return <Image src={catTyping} alt="cat" width="500px" height="309px" />;
  };

  return (
    <Fragment>
      <Header
        ColorModeContext={ColorModeContext}
        setCheckDirect={setCheckDirect}
        checkDirect={checkDirect}
      />

      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Grid container spacing="0.5">
          <Grid item sm={1} md={2} />
          <Grid item xs={12} sm={10} md={8} style={{ padding: "0 20px" }}>
            <Grid container>
              <Grid
                item
                sx={{
                  bgcolor: "background.default",
                  color: "text.primary",
                }}
                style={{ margin: "auto", marginTop: "2em" }}
              >
                <CatTyping />
              </Grid>
            </Grid>
            <Component
              checkDirect={checkDirect}
              setCheckDirect={setCheckDirect}
            />
          </Grid>
          <Grid item sm={1} md={2} />
        </Grid>
      </Box>
    </Fragment>
  );
}
