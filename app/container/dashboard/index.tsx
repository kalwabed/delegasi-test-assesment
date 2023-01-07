import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Tag,
  Text
} from '@chakra-ui/react'
import { Link, NavLink } from '@remix-run/react'

export default function DashboardContainer() {
  return (
    <Flex flexDir="column" mb={5}>
      <Heading mt={4}>Laporan</Heading>

      <InputGroup my={2}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="search" placeholder="Cari data" variant="filled" />
      </InputGroup>

      <ButtonGroup mt={2} spacing={4} size="sm">
        <NavLink to="/">
          {({ isActive }) => (
            <Button color={isActive ? 'green.500' : 'gray.500'} variant={isActive ? 'solid' : 'ghost'}>
              Laba Rugi
            </Button>
          )}
        </NavLink>
        <NavLink to="/neraca">
          {({ isActive }) => (
            <Button color={isActive ? 'green.500' : 'gray.500'} variant={isActive ? 'solid' : 'ghost'}>
              Neraca
            </Button>
          )}
        </NavLink>
      </ButtonGroup>
    </Flex>
  )
}
