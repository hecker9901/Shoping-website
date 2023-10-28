// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import MiniDrawer from "./MiniDrawer";
import "./Layout.css";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Layout(props) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "black" }}>
      <CssBaseline />
      <MiniDrawer open={props.open} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <div className="sections">{props.children}</div>
      </Box>
    </Box>
  );
}
