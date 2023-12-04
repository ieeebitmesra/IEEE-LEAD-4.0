'use client'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { FaInstagram, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa'

const page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          mt={6}
          align="center"
        >
          <div>Hello, I&apos;m a graphic designer based in India</div>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sakshi Sinha
            </Heading>

            <p>Digital Craftzman (Artist / Singer/ Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="100%"
              src="/images/pagal.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Message from an old friend
          </Heading>

          <Paragraph>
            Sakshi Sinha is one the most wierdest yet lovable human beings I've
            met. When you'll meet her, at first you will find her loud and
            obnoxious. She throws lots of tantrums, listens to no one other than
            herself. If it were upto her, she would paint the whole world in her
            colors. But for now she's just a struggling college kid.{' '}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="https://www.behance.net/sakshisinha17" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Dhanbad, India.
          </BioSection>

          <BioSection>
            <BioYear>2021</BioYear>
            Finished Schooling From De Nobili, Koradih.
          </BioSection>

          <BioSection>
            <BioYear>2022</BioYear>
            Pursuing Chemical Engineering from BIT Mesra, Ranchi
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          I love my indomitable mother for her unwavering strength and endless
          love. ❤️
          <br />
          I love my zealous father for his support, his short temperament makes
          him unique. 👊
          <br />I love my devoted brother for his unwavering support and
          occasional quirks. 🐒
        </Section>
      </Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={6}
        display="flex"
        justifyContent="center"
        gap={5}
        align="center"
      >
        <NextLink
          href="https://instagram.com/sakshi_sinha285?igshid=YzAwZjE1ZTI0Zg=="
          passHref
        >
          <Icon as={FaInstagram} boxSize={8} />
        </NextLink>

        <NextLink href="https://www.behance.net/sakshisinha17" passHref>
          <Icon as={FaBehance} boxSize={8} />
        </NextLink>

        <NextLink
          href="https://www.linkedin.com/in/sakshi-sinha-09a377270"
          passHref
        >
          <Icon as={FaLinkedin} boxSize={8} />
        </NextLink>

        <NextLink
          href="   https://github.com/Codegoofy4311"
          passHref
        >
          <Icon as={FaGithub} boxSize={8} />
        </NextLink>
     
      </Box>
    </Layout>
  )
}

export default page
