import React from 'react'

const themes = {
  purple: 'bg-purple-500 hover:bg-purple-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
  teal: 'bg-teal-500 hover:bg-teal-600',
  indigo: 'bg-indigo-500 hover:bg-indigo-600',
  orange: 'bg-orange-500 hover:bg-orange-600',
}

function Button({ label, onClick, disabled, theme = 'indigo' }) {
  const themeClasses = themes[theme]
  const buttonClasses = `text-white border-none py-2 px-4 text-sm cursor-pointer transition-all duration-300 rounded-md ${themeClasses} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {label}
    </button>
  )
}

export default Button
