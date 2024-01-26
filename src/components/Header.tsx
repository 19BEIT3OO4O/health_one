import { Button, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ThemeProvider, createTheme, Palette } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: { mode: darkMode ? "dark" : "light" },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <HStack p={"4"} shadow={"base"} display={"flex"}>
      <Button variant={"unstyled"}>
        <HashLink to="/home">Home</HashLink>
      </Button>
      <Button variant={"unstyled"}>
        <HashLink to="/testimonials">Testimonials</HashLink>
      </Button>
      <Button variant={"unstyled"}>
        <HashLink to="/book">BookingForm</HashLink>
      </Button>
      <VStack alignItems={"flex-end"} mr={"0"}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <button onClick={toggleDarkMode}> Dark Mode</button>
        </ThemeProvider>
      </VStack>
    </HStack>
  );
};

export default Header;
