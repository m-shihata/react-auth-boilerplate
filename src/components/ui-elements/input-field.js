import { forwardRef, useId } from 'react'

const InputField = forwardRef(({ label, error, ...inputProps }, ref) => {
  // to avoid any clashes with other inputs on the page
  const id = useId() + '-' + inputProps.name
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          ref={ref}
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps}
        />
      </div>
      {error && error.message && <div className="text-xs text-red-400 mt-1">{error.message}</div>}
    </div>
  )
})

export default InputField
