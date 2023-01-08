import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { formatCurrency } from '~/utils/currency'
import type { Laporan } from '../routes/__dashboard/index'

interface DataCardProps extends Laporan {
  bgColor?: string
  icon: React.ReactNode
}

const DataCard = (props: DataCardProps) => {
  const { bgColor, icon, label, value } = props

  return (
    <Card bgColor={bgColor} shadow="md">
      <CardHeader pb={2}>
        {icon}
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
