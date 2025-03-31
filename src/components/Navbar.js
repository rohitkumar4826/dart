import { useState } from "react";
import { NavLink } from "react-router";

// * Components
import CustomButton from "./CustomButton";

// * Images
import logoImg from "../media/logo.png";

// * MUI Components
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

// * MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import { Contacts, Home, MiscellaneousServices } from "@mui/icons-material";

// * Styled Components
const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 3),
  },
}));

const NavbarLogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  height: "50px",
  width: "auto",
  maxWidth: "150px",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    height: "40px",
    maxWidth: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "35px",
    maxWidth: "100px",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(NavLink)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer",
  "&.active": {
    color: "#0F1B4C", // Highlight active link
    fontWeight: "bold",
  },
  "&:hover": {
    color: "#0F1B4C",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ListComponent = ({ setShowMenu }) => (
  <List sx={{ width: 200 }}>
    {[
      { text: "Home", path: "/" },
      { text: "Services", path: "/pricing" },
      { text: "About", path: "/about" },
    ].map(({ text, path }, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton
          component={NavLink}
          to={path}
          onClick={() => setShowMenu(false)}
        >
          <ListItemIcon>
            {index === 0 && <Home />}
            {index === 1 && <MiscellaneousServices />}
            {index === 2 && <Contacts />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavbarContainer>
      {/* Left Side (Menu Icon for Mobile + Logo) */}
      <NavbarLogoBox>
        <MenuBox onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </MenuBox>
        <NavbarLogo src={logoImg} alt="logo" />
      </NavbarLogoBox>

      {/* Center Links (Hidden in Mobile View) */}
      <NavbarLinkBox>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/pricing">Services</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </NavbarLinkBox>

      {/* Right Side (Buttons) */}
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
        <NavbarLink to="/signin">Sign In</NavbarLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Get Started"
        />
      </Box>

      {/* Drawer Menu for Mobile */}
      <Drawer anchor="left" open={showMenu} onClose={() => setShowMenu(false)}>
        <ListComponent setShowMenu={setShowMenu} />
      </Drawer>
    </NavbarContainer>
  );
}
