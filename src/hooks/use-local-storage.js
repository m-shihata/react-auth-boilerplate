import { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(() => {
    if (key && value) localStorage.setItem(key, JSON.stringify(value))

    if (value === null) {
      localStorage.removeItem(key)
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
