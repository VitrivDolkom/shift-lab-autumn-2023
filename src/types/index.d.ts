/* eslint-disable @typescript-eslint/no-unused-vars */

interface DistrosTable {
  rows: DistrosTableRow[]
}

// Record<string, string> нужно для типизации useSearchParams
interface TableSearchDto extends Record<string, string> {
  search: string
  header: string
}

type DistrosTableHeaders = string[]
type DistrosTableRow = string[]
