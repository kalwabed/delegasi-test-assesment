import { FcChargeBattery } from 'react-icons/fc'
import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { formatCurrency } from '~/utils/currency'
import type { Laporan } from '../routes/__dashboard/index'

interface DataCardProps extends Laporan {
  bgColor?: string
}

const DataCard = (props: DataCardProps) => {
  const { bgColor, label, value } = props

  return (
    <Card bgColor="blue.100" shadow="md">
      <CardHeader pb={2}>
        <FcChargeBattery size="3rem" />
        <Heading size="xs" mt={2} color="gray.600">
          {label}
        </Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text fontWeight="bold" fontSize="sm">
          {formatCurrency(value)}
        </Text>
      </CardBody>
    </Card>
  )
}

export default DataCard
