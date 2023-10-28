import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import List from "@mui/material/List";
import useTheme from "@mui/material/styles/useTheme";
import MuiDrawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const items = [
  {
    text: "Home",
    icon: <HomeIcon />,
    link: "/admin",
  },
  {
    text: "Products",
    icon: <ShoppingCartIcon />,
    link: "/admin/products",
  },
  // {
  //   text: "Customers",
  //   icon: <PersonIcon />,
  //   link: "/admin/customer",
  // },
  {
    text: "Orders",
    icon: <ShoppingBagIcon />,
    link: "/admin/orders",
  },
  {
    text: "Add product",
    icon: <DriveFolderUploadIcon />,
    link: "/admin/add-product",
  },
];

const MiniDrawer = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const { open } = props;
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate(item.link)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: {
                  md: open ? "initial" : "center",
                  xs: "initial",
                },
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: { md: open ? 3 : "auto", xs: 0 },
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: { md: open ? 1 : 0 },
                  display: { xs: "none", md: "block" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniDrawer;
