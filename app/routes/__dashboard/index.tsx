import { Flex, SimpleGrid } from '@chakra-ui/react'
import { fetch } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import DataCard from '~/components/data-card'
import SectionCard from '~/components/section-card'

export interface Laporan {
  label: string
  month: string
  value: number
  details: Laporan[]
}

export const loader = async (): Promise<Laporan> => {
  const res = await fetch('https://my-json-server.typicode.com/Delegasi-Tech/data-dummy/laporan_laba_rugi')
  return await res.json()
}

const LabaRugiPage = () => {
  const laporan = useLoaderData<typeof loader>()

  return (
    <Flex flexDir="column" gap={8}>
      <SectionCard {...laporan} />
      <SimpleGrid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" spacing={5}>
        {laporan.details.map(item => (
          <DataCard key={item.label} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default LabaRugiPage
