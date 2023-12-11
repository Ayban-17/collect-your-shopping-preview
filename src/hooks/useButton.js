import { useRef, useState } from 'react'

function useButton(arrLength) {
  const [currentlySelected, setCurrentlySelected] = useState(0)

  const changeCurrent = (num) => {
    if (num < 0) return setCurrentlySelected(arrLength - 1)
    if (num > arrLength - 1) return setCurrentlySelected(0)
    setCurrentlySelected(num)
  }

  const next = () => {
    changeCurrent(currentlySelected + 1)
  }

  const prev = () => {
    changeCurrent(currentlySelected - 1)
  }

  return { currentlySelected, next, prev, changeCurrent }
}

export default useButton
