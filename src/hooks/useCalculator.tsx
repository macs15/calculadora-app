import { useRef, useState } from 'react'

enum Operators {
  add = 'add',
  subtract = 'subtract',
  multiply = 'multiply',
  divide = 'divide',
  default = 'default'
}

const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0')
  const [number, setNumber] = useState('100')

  const prevNumberRef = useRef<keyof typeof Operators>('default')

  const clearScreen = () => {
    setPrevNumber('0')
    setNumber('0')
  }

  const addNumber = (btnText: string) => {
    if (number.includes('.') && btnText === '.') {
      return
    }
    if (number === '-0' && btnText === '0') {
      return
    }
    if (number === '0' && btnText === '0') {
      return
    }
    if (number === '0' && btnText !== '.') {
      setNumber(btnText)
      return
    }
    if (number === '-0' && btnText !== '.') {
      setNumber('-' + btnText)
      return
    }

    setNumber(number + btnText)
  }

  const setPositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  const deleteDigit = () => {
    const length = number.length

    if (number.includes('-') && length < 3) {
      setNumber('0')
      return
    }
    if (length < 2) {
      setNumber('0')
      return
    }

    setNumber(number.slice(0, -1))
  }

  const numbersBreadcrumb = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }

    setNumber('0')
  }

  const setLastPrevNumber = (type: keyof typeof Operators) => {
    numbersBreadcrumb()
    prevNumberRef.current = type
  }

  const calculate = () => {
    const num1 = Number(number)
    const num2 = Number(prevNumber)

    const OPERATIONS = {
      [Operators.add]: `${num1 + num2}`,
      [Operators.subtract]: `${num2 - num1}`,
      [Operators.multiply]: `${num1 * num2}`,
      [Operators.divide]: `${num2 / num1}`,
      [Operators.default]: number
    }

    setPrevNumber('0')
    setNumber(OPERATIONS[prevNumberRef.current])
    prevNumberRef.current = 'default'
  }

  return {
    calculate,
    setLastPrevNumber,
    deleteDigit,
    setPositiveNegative,
    addNumber,
    clearScreen,
    number,
    prevNumber
  }
}

export default useCalculator
