import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack, Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
      href={'#'}>
      {children}
    </Box>
  )
}

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box borderBottom={'1px solid grey'} bg={useColorModeValue('#ffffff', 'gray.900')} px={8} mb={'4vh'}>
      <Flex h={'8vh'} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Text fontWeight={'bold'}>APP LOGO</Text>
        <HStack spacing={8} alignItems={'center'} color={'#4e4b4b'} fontWeight={'500'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to='/'>DASHBOARD</Link>
            <Link to='/createAds'>CREATE ADS</Link>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link to='/'>DASHBOARD</Link>
            <Link to='/createAds'>CREATE ADS</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}