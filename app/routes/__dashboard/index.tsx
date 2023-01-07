import { SimpleGrid } from '@chakra-ui/react'
import DataCard from '~/components/data-card'

const LabaRugiPage = () => {
  // add option to show data in row or column
  return (
    <SimpleGrid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" spacing={5}>
      <DataCard />
      <DataCard />
      <DataCard />
      <DataCard />
    </SimpleGrid>
  )
}

export default LabaRugiPage
