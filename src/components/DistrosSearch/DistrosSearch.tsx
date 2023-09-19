import { SubmitHandler, useForm } from 'react-hook-form'
import s from './style.module.css'

interface SearchFieldProps {
  onSubmit: (search: SearchForm) => void
  headers: DistrosTableHeader
  searchInfo: string
}

export type SearchForm = TableSearchDto

export const DistrosSearch = ({ onSubmit, headers, searchInfo }: SearchFieldProps) => {
  const { register, handleSubmit } = useForm<SearchForm>()
  const onSearchSubmit: SubmitHandler<SearchForm> = (values) => {
    onSubmit(values)
  }

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit(onSearchSubmit)}>
        <input
          type="text"
          {...register('search')}
          className={s.searchInput}
          placeholder="Enter text..."
        />
        <select {...register('header')}>
          {headers.map((header, index) => (
            <option key={index} value={header}>
              {header}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <p>{searchInfo}</p>
    </div>
  )
}
