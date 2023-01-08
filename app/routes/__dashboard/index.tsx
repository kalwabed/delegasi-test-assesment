import { Flex, SimpleGrid } from '@chakra-ui/react'
import { fetch } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import cardIcons from '~/components/card-icons'
import DataCard from '~/components/data-card'
import SectionCard from '~/components/section-card'
import { useSearch } from '~/hooks/use-search'
import type { Laporan } from '~/types'

export const loader = async (): Promise<Laporan> => {
  const res = await fetch('https://my-json-server.typicode.com/Delegasi-Tech/data-dummy/laporan_laba_rugi')
  return await res.json()
}

const LabaRugiPage = () => {
  const laporan = useLoaderData<typeof loader>()
  const { laporan: filteredLabaRugi } = useSearch(laporan)

  return (
    <Flex flexDir="column" gap={8}>
      <SectionCard {...laporan} />
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" spacing={5}>
        {filteredLabaRugi.map((item, i) => (
          <DataCard key={item.label} bgColor="blue.100" icon={cardIcons[i]} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default LabaRugiPage
