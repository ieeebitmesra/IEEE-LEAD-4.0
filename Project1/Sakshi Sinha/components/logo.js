import Link from 'next/link'
import Image from 'next/image'
import FootprintIcon from './icons/footprint'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox=styled.span`
font-weight: bold;
font-size:18px;
display:inline-flex;
align-items:center;
height:30px;
line-height:20px;
padding:10px;

&:hover img{
    transform: rotate(20deg);
}
`

const Logo=()=>{
    const footPrintImg=`/images/footprint${useColorModeValue('','-dark')}.png`

    return(
        <Link href="/">
         
                <LogoBox>
                  <FootprintIcon/>
                    <Text ml={3} color={useColorModeValue('gray.800','whiteAlpha.900')}
                    fontFamily="'M PLUS Rounded 1c', sans-serif"
                    fontWeight='bold'
                   
                    >Goofball</Text>
                </LogoBox>
          
        </Link>
    )
}

export default Logo