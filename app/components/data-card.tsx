import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { HiChevronRight } from 'react-icons/hi2'
import type { Laporan } from '~/types'

import { formatCurrency } from '~/utils/currency'
import { dateFormatter } from '~/utils/date'

interface DataCardProps extends Laporan {
  bgColor?: string
  icon: React.ReactNode
}

const DataCard = (props: DataCardProps) => {
  const { bgColor, icon, label, value, details, children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <CardFooter justify="end" pt={0}>
        {details?.length > 0 ? (
          <Button rightIcon={<HiChevronRight />} onClick={onOpen} variant="ghost" color="gray.500" size="xs">
            Detail
          </Button>
        ) : children?.length > 0 ? (
          <Link to="/aktiva-lancar">
            <Button rightIcon={<HiChevronRight />} variant="ghost" color="gray.500" size="xs">
              Detail
            </Button>
          </Link>
        ) : null}
      </CardFooter>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={2}>
          <ModalHeader>{label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {details?.map(detail => (
              <Flex key={detail.label} shadow="md" mb={2}>
                <Stat p={2}>
                  <StatLabel>{detail.label}</StatLabel>
                  <StatNumber fontSize="md">{formatCurrency(detail.value)}</StatNumber>
                  <StatHelpText>{dateFormatter(new Date(detail.month))}</StatHelpText>
                </Stat>
              </Flex>
            ))}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Card>
  )
}

export default DataCard
