import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Select } from '..'
import { SelectOption } from '../Select/Select'
import s from './style.module.css'

interface SearchFieldProps {
  onSubmit: (search: SearchForm) => void
  headers: DistrosTableHeader
  searchInfo: string
}

type SearchForm = TableSearchDto

export const DistrosSearch = ({ onSubmit, headers, searchInfo }: SearchFieldProps) => {
  const [currentOption, setCurrentOption] = React.useState<SelectOption | undefined>()
  const { register, handleSubmit } = useForm<SearchForm>()
  const onSearchSubmit: SubmitHandler<SearchForm> = (values) => {
    onSubmit(values)
  }

  return (
    <div className={s.wrapper}>
      <form className="" onSubmit={handleSubmit(onSearchSubmit)}>
        <input type="text" {...register('search')} className="input t5" placeholder="Enter text..." />
        <Select
          options={headers}
          currentOption={currentOption}
          onOptionChange={(newOption) => setCurrentOption(newOption)}
        />
        <select className="select t5" {...register('header')}>
          {headers.map((header, index) => (
            <option key={index} value={header} className="option">
              <div className="ellipsis">{header}</div>
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
      <p>{searchInfo}</p>
    </div>
  )
}
