import { Flex, SimpleGrid } from '@chakra-ui/react'
import {
  FcAddressBook,
  FcAreaChart,
  FcBiomass,
  FcBriefcase,
  FcChargeBattery,
  FcCollect,
  FcCustomerSupport,
  FcDepartment,
  FcFilm,
  FcIpad,
  FcOnlineSupport,
  FcRating,
  FcShop
} from 'react-icons/fc'
import { fetch } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import DataCard from '~/components/data-card'
import SectionCard from '~/components/section-card'

const icons = [
  <FcChargeBattery size="3rem" />,
  <FcAreaChart size="3rem" />,
  <FcAddressBook size="3rem" />,
  <FcBiomass size="3rem" />,
  <FcBriefcase size="3rem" />,
  <FcCollect size="3rem" />,
  <FcCustomerSupport size="3rem" />,
  <FcDepartment size="3rem" />,
  <FcFilm size="3rem" />,
  <FcOnlineSupport size="3rem" />,
  <FcIpad size="3rem" />,
  <FcShop size="3rem" />,
  <FcRating size="3rem" />
]

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
        {laporan.details.map((item, i) => (
          <DataCard key={item.label} bgColor="blue.100" icon={icons[i]} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default LabaRugiPage
