import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Link, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay as="h1" href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItems = ({ children, src, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={src}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          width={200}
          height={200}
          alt={title}
          className="grid-item-thumbnail"
        />
        <LinkOverlay as="h1" href={src}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
  grid-items-thumbnail {
    border-radius: 12px;
 
  }
  `}
  />
)
