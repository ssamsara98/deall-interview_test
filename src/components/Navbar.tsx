import {
  Box,
  Flex,
  // Avatar,
  HStack,
  Link,
  IconButton,
  // Button,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Image,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, StarIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import deall from 'src/assets/deall.svg';

const Links = [{ name: 'Bookmark', icon: StarIcon, path: '/bookmark' }];

const NavLink = ({ children, to }: { children: ReactNode } & LinkProps) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
    to={to}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mb={'8'}>
      <Container maxW={{ lg: 'container.lg' }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <RouterLink to={'/'}>
              <Image src={deall} />
            </RouterLink>

            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ name, icon: Icon, path }) => (
                <NavLink key={name} to={path}>
                  <HStack>
                    <Icon /> <Text>{name}</Text>
                  </HStack>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>
      </Container>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ name, icon: Icon, path }) => (
              <NavLink key={name} to={path}>
                <HStack>
                  <Icon /> <Text>{name}</Text>
                </HStack>
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
