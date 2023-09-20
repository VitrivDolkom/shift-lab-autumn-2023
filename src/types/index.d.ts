/* eslint-disable @typescript-eslint/no-unused-vars */

interface DistrosTable {
  rows: DistrosTableRow[]
}

interface TableSearchDto {
  search: string
  header: string
}

type DistrosTableHeader = string[]
type DistrosTableRow = string[]
