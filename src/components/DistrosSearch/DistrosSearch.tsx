import classNames from 'classnames/bind'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Select, SelectOption } from '../'
import s from './style.module.css'

const cx = classNames.bind(s)

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
    values.header = currentOption || ''
    onSubmit(values)
  }

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSearchSubmit)}>
        <input type="text" {...register('search')} className="input t5" placeholder="Введите текст..." />
        <Select
          options={headers}
          currentOption={currentOption}
          onOptionChange={(newOption) => setCurrentOption(newOption)}
        />
        <button type="submit" className="button solid t5">
          Поиск
        </button>
        <p className={cx({ searchInfo: true, t4: true })}>{searchInfo}</p>
      </form>
    </div>
  )
}
