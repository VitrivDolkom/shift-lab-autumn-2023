import { SubmitHandler, useForm } from 'react-hook-form'

interface SearchFieldProps {
  onSubmit: (search: SearchForm) => void
  headers: DistrosTableHeader
}

export interface SearchForm {
  search: string
  currentHeader: string
}

export const SearchField = ({ onSubmit, headers }: SearchFieldProps) => {
  const { register, handleSubmit } = useForm<SearchForm>()
  const onSearchSubmit: SubmitHandler<SearchForm> = (values) => {
    onSubmit(values)
  }

  return (
    <form className="" onSubmit={handleSubmit(onSearchSubmit)}>
      <input type="text" {...register('search')} />
      <select {...register('currentHeader')}>
        {headers.map((header, index) => (
          <option key={index} value={header}>
            {header}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  )
}
