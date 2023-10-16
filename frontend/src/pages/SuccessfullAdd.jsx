import {Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import React from 'react'

export const SuccessfullAdd = () => {
  const navigate = useNavigate();

  setTimeout(() => {
     navigate('/createAds');
  },6000);

  return (
    <Flex justifyContent="center" alignItems="center" border="1px solid #ded7d7" width={['95%', '50%']} height="87vh" p={['2vh 2vw', '2vh']} m="auto">
            <Flex direction="column" justifyContent="center" alignItems="center" gap="2vh" width={['100%', '33vw']} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" height={['auto', '30vh']} m="auto">
                <Image width={['20%', '10%']} src="https://i.ibb.co/0ZbjRBF/image-removebg-preview-1.png" alt="successfull" />
                <Text fontWeight="medium">Submitted</Text>
            </Flex>
        </Flex>
  )
}