import React from "react";
import { Image, Stack, Button, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack>

      <Stack>
        <Heading as='h3' size='lg' color="white" position="absolute" top="100px" left="580px" zIndex="2">
          DOMINA EL TERRENO
        </Heading>
        
        <Image
          boxSize="lg"
          width="100%"
          height="300px"
          objectFit="cover"
          src="public/img/dark2.jpg"
          alt="Dan Abramov"
          position="relative"
          zIndex="1"
        />

        <Button 
          colorScheme="teal" 
          variant="outline" 
          position="absolute" 
          top="200px" 
          left="750px" 
          zIndex="2" 
          border="1px solid white"
          color="white"
          >
            VER DETALLES
        </Button>

        <Button 
          colorScheme="teal" 
          variant="outline" 
          position="absolute" 
          top="200px" 
          left="600px" 
          zIndex="2" 
          border="1px solid white" 
          color="white"
          >
            VER VIDEO
        </Button> 
      </Stack>

      <Stack>

      <Heading as='h3' size='md' color="white" position="absolute" top="430" left="55px" zIndex="2">
          DOMINA EL TERRENO
        </Heading>
        
        <Image
          boxSize="lg"
          top="50px"
          width="22%"
          height="250px"
          objectFit="cover"
          src="public/img/dark2.jpg"
          alt="Dan Abramov"
          position="relative"
          zIndex="1"
        />

        <Button 
          colorScheme="teal" 
          variant="outline" 
          position="absolute" 
          top="520px" 
          left="100px" 
          zIndex="2" 
          border="1px solid white"
          color="white"
          >
            VER DETALLES
        </Button>

        <Button 
          colorScheme="teal" 
          variant="outline" 
          position="absolute" 
          top="465px" 
          left="110px" 
          zIndex="2" 
          border="1px solid white" 
          color="white"
          >
            VER VIDEO
        </Button> 

      </Stack>


    </Stack>


  );
};

export default Header;