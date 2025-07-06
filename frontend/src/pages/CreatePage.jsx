import { Box, Container, Heading, /* useColorModeValue, */ VStack } from "@chakra-ui/react";
import { Button, Input } from "@chakra-ui/react";

import { useState } from "react";


const CreatePage = () => {
    
    const [newProduct, useProduct] = useState({
        name: "",
        price: "",
        image: ""
    })

    const handleAddProduct = () => {
        console.log(newProduct)
    }

    return <Container>
        <VStack
            spacing={8}
        >
            <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
                Create New Product
            </Heading>

            <Box
                w={'full'} bg={useColorModeValue('white', 'gray.800')}
                p={6} rounded={'lg'} shadow={'md'}
            >
                <VStack spacing={4}>
                    <Input
                        placeholer='Product Name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => useProduct({ ...newProduct, name: e.target.value }) }
                    />
                    <Input
                        placeholer='Product Price'
                        name='price'
                        value={newProduct.price}
                        onChange={(e) => useProduct({ ...newProduct, price: e.target.value }) }
                    />
                    <Input
                        placeholer='Product Image'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => useProduct({ ...newProduct, image: e.target.value }) }
                    />
                    <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                        Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
};

export default CreatePage;