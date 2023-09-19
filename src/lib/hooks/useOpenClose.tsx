import React from 'react'

export const useOpenClose = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)
  const setOpen = () => setIsOpen(true)
  const setClose = () => setIsOpen(false)

  return { isOpen, setOpen, setClose, toggleOpen }
}
