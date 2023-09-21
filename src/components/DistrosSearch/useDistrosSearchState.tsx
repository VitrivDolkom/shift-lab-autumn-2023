import { useSearchParams } from 'react-router-dom'

export const useDistrosSearchState = (searchDto: TableSearchDto) => {
  const [searchParams, setSearchParams] = useSearchParams(searchDto)
  const search = searchParams.get('search') || ''
  const header = searchParams.get('header') || ''

  const setHeader = (header: string) => {
    setSearchParams((prev) => {
      prev.set('header', header)
      return prev
    })
  }

  const setSearch = (search: string) => {
    setSearchParams((prev) => {
      prev.set('search', search)
      return prev
    })
  }

  return { header, search, setSearch, setHeader }
}
