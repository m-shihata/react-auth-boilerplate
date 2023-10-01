import useAutoLogin from 'hooks/use-auto-login'
import useYupValidationResolver from 'hooks/use-yup-validation-resolver'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import InputField from 'components/ui-elements/input-field'

import { registerSchema } from 'configs/yup-validation-schemas'

import { asyncRegister } from 'services/reqres/requests'

function Register() {
  const dispatch = useDispatch()
  const resolver = useYupValidationResolver(registerSchema)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver })

  const onSubmit = data => dispatch(asyncRegister(data))

  useAutoLogin() // will redirect to '/' if user is logged in

  return (
    <div className="Register flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Creat an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="First name"
            name="firstName"
            type="text"
            error={errors.firstName}
            {...register('firstName')}
          />
          <InputField
            label="Last name"
            name="lastName"
            type="text"
            error={errors.lastName}
            {...register('lastName')}
          />
          <InputField
            label="Email address"
            name="email"
            type="email"
            autoComplete={'current-email'}
            error={errors.email}
            {...register('email')}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            autoComplete={'current-password'}
            error={errors.password}
            {...register('password')}
          />
          <div>
            <input
              type="submit"
              value="Create an account"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <span>
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1"
            >
              login
            </Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
