import classNames from 'classnames/bind'
import { useOpenClose } from '@/lib/hooks'
import s from './style.module.css'

const cx = classNames.bind(s)

export type SelectOption = string

interface SelectProps {
  onOptionChange: (option: SelectOption) => void
  options: SelectOption[]
  currentOption?: SelectOption
}

export const Select = ({ onOptionChange, options, currentOption }: SelectProps) => {
  const { isOpen, toggleOpen } = useOpenClose()

  return (
    <div className={s.wrapper}>
      <div className={s.currentOption} onClick={toggleOpen}>
        {currentOption}
      </div>
      <div className={s.divider}></div>
      <div className={s.caret}></div>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={cx({ option: true, show: currentOption === option })}
              onClick={() => onOptionChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
