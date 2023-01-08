import { Flex, SimpleGrid } from '@chakra-ui/react'
import { fetch } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import cardIcons from '~/components/card-icons'
import DataCard from '~/components/data-card'
import SectionCard from '~/components/section-card'
import type { Laporan } from '~/types'

export const loader = async (): Promise<Laporan> => {
  const res = await fetch('https://my-json-server.typicode.com/Delegasi-Tech/data-dummy/laporan_neraca')
  const laporan: Laporan = await res.json()
  const aktivaLancar = laporan.details[0].details[0]

  return aktivaLancar
}

const AktivaLancarPage = () => {
  const aktivaLancar = useLoaderData<typeof loader>()

  return (
    <Flex flexDir="column" gap={8}>
      <SectionCard headingSize="sm" {...aktivaLancar} />

      <SimpleGrid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" spacing={5}>
        {aktivaLancar.children.map((detail, i) => (
          <DataCard key={detail.label} bgColor="teal.100" icon={cardIcons[i]} {...detail} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default AktivaLancarPage
