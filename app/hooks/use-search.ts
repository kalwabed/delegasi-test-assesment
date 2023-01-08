import { useMemo } from 'react'

import { useSearchContext } from '~/context'
import type { Laporan } from '~/types'

export function useSearch(laporan: Laporan, deep = 1) {
  const { search: searchValue } = useSearchContext()

  const searchResult = useMemo(() => {
    const data = laporan.children ?? laporan.details

    if (searchValue) {
      if (deep > 1) {
        const result: Laporan[] = []
        data?.forEach(detail => {
          const searchedDetails = detail.details?.filter(subDetail => {
            return subDetail.label.toLowerCase().includes(searchValue.toLowerCase())
          })

          if (searchedDetails?.length) {
            result.push({
              ...detail,
              details: searchedDetails
            })
          }
        })

        return result
      } else {
        return data.filter(detail => {
          return detail.label.toLowerCase().includes(searchValue.toLowerCase())
        })
      }
    }

    return data
  }, [searchValue, laporan])

  return { laporan: searchResult }
}
