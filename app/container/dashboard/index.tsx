import { SearchIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { NavLink } from '@remix-run/react'

import { useSearchContext } from '~/context'

export default function DashboardContainer() {
  const { search, onSearch } = useSearchContext()

  return (
    <Flex flexDir="column" mb={5}>
      <Heading mt={4}>Laporan</Heading>

      <InputGroup my={2}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={search}
          onChange={e => onSearch(e.target.value)}
          type="search"
          placeholder="Cari data"
          variant="filled"
        />
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
