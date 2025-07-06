import { Box, /* useColorModeValue */ } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import React from "react";

import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

export default function App() {

  return (
    //bg={useColorModeValue('gray.100', 'gray.900')}
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
    </Box>
  )
}
