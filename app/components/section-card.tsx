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
import type { Laporan } from '~/types'
import { formatCurrency } from '~/utils/currency'
import { dateFormatter } from '~/utils/date'

interface SectionCardProps extends Laporan {
  headingSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
}

const SectionCard = (props: SectionCardProps) => {
  const { label, value, month, headingSize = 'md' } = props

  return (
    <Card direction="row" overflow="hidden" shadow="lg" bgColor="white" justify="space-between" align="center">
      <CardHeader>
        <Flex align="center">
          <Heading size={headingSize}>{label}</Heading>
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
                  <Text>{dateFormatter(new Date(month), { dateStyle: 'long' })}</Text>
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
