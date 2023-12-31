import NextLink from 'next/link'
import { Container, Heading, Box, Text, Button, Divider } from '@chakra-ui/react'

export default function custom404() {
  return <Container>
    <Heading as="h1" >Not Found</Heading>
    <Text>The page you&apos;re looking for was not found.</Text>
    <Divider my={6}/>
    
  <Box my={6} align="center">
    <NextLink href="/">
<Button colorScheme='teal'>Return to home</Button>
    </NextLink>
  </Box>

    
  </Container>
}