import { FcChargeBattery } from 'react-icons/fc'
import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { formatCurrency } from '~/utils/currency'

const DataCard = () => {
  return (
    <Card bgColor="blue.100" shadow="md">
      <CardHeader pb={2}>
        <FcChargeBattery size="3rem" />
        <Heading size="xs" mt={2} color="gray.600">
          Pendapatan Kotor
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text fontWeight="bold" fontSize="sm">
          {formatCurrency(200301222)}
        </Text>
      </CardBody>
    </Card>
  )
}

export default DataCard
