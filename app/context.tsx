import { useLocation } from '@remix-run/react'
import * as React from 'react'

export interface ServerStyleContextData {
  key: string
  ids: Array<string>
  css: string
}

export const ServerStyleContext = React.createContext<ServerStyleContextData[] | null>(null)

export interface ClientStyleContextData {
  reset: () => void
}

export const ClientStyleContext = React.createContext<ClientStyleContextData | null>(null)

export const SearchContext = React.createContext<{ search: string; onSearch: (value: string) => void } | undefined>(
  undefined
)

export const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [search, setSearch] = React.useState<string>('')

  function handleOnSearch(value: string) {
    setSearch(value)
  }

  React.useEffect(() => {
    return () => {
      setSearch('')
    }
  }, [location])

  return <SearchContext.Provider value={{ search, onSearch: handleOnSearch }}>{children}</SearchContext.Provider>
}

export function useSearchContext() {
  const context = React.useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchContextProvider')
  }

  return context
}
