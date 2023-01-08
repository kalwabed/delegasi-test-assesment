import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { fetch } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import cardIcons from '~/components/card-icons'
import DataCard from '~/components/data-card'
import SectionCard from '~/components/section-card'
import { useSearch } from '~/hooks/use-search'
import type { Laporan } from '~/types'
import { formatCurrency } from '~/utils/currency'

export const loader = async (): Promise<Laporan> => {
  const res = await fetch('https://my-json-server.typicode.com/Delegasi-Tech/data-dummy/laporan_neraca')
  return await res.json()
}

const NeracaPage = () => {
  const laporan = useLoaderData<typeof loader>()
  const { laporan: filteredNeraca } = useSearch(laporan, 2)

  return (
    <Flex flexDir="column" gap={8}>
      <SectionCard {...laporan} />

      {filteredNeraca?.length > 0 ? (
        filteredNeraca.map((item, i1) => (
          <div key={item.label}>
            <Flex flexDir="column" mb={3}>
              <Heading>{item.label}</Heading>
              <Text fontSize="xs">{formatCurrency(item.value)}</Text>
            </Flex>
            <SimpleGrid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" spacing={5}>
              {item.details.map((detail, i2) => (
                <DataCard
                  key={detail.label}
                  bgColor="purple.100"
                  icon={i1 == 1 ? cardIcons[i2 + 2] : cardIcons[i2]}
                  {...detail}
                />
              ))}
            </SimpleGrid>
          </div>
        ))
      ) : (
        <Text>Maaf, data tidak ditemukan</Text>
      )}
    </Flex>
  )
}

export default NeracaPage
