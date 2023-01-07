import { InfoIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text
} from '@chakra-ui/react'
import { formatCurrency } from '~/utils/currency'
import type { Laporan } from '../routes/__dashboard/index'

const SectionCard = (props: Laporan) => {
  const { label, value, month } = props

  return (
    <Card direction="row" overflow="hidden" shadow="lg" bgColor="white" justify="space-between" align="center">
      <CardHeader>
        <Flex align="center">
          <Heading size="md">{label}</Heading>
          <Popover isLazy placement="top">
            <PopoverTrigger>
              <IconButton size="sm" variant="ghost" colorScheme="orange" icon={<InfoIcon />} aria-label="info" />
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Periode</PopoverHeader>
                <PopoverBody>
                  <Text>{new Intl.DateTimeFormat('id', { dateStyle: 'long' }).format(new Date(month))}</Text>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </CardHeader>
      <CardBody textAlign="right">
        <Text fontWeight="bold">{formatCurrency(value)}</Text>
      </CardBody>
    </Card>
  )
}

export default SectionCard
