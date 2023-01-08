import { useMemo } from 'react'

import { useSearchContext } from '~/context'
import type { Laporan } from '~/types'

export function useSearch(laporan: Laporan) {
  const { search: searchValue } = useSearchContext()

  const searchResult = useMemo(() => {
    if (searchValue) {
      return (laporan.details ?? laporan.children).filter(detail => {
        return detail.label.toLowerCase().includes(searchValue.toLowerCase())
      })
    }
    return laporan.details
  }, [searchValue, laporan])

  return { laporan: searchResult }
}
