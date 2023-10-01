import * as yup from 'yup'

const inputSchema = {
  nameField(name) {
    return yup
      .string()
      .min(2, name + ' must have at least 2 characters')
      .required(name + ' is required')
  },
  email: yup.string().email('Email must be a valid email').required('Email is required'),
  password: yup
    .string()
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .min(8, 'Password must have at least 8 characters')
    .required('Password is required'),
}

export const loginSchema = yup.object({
  email: inputSchema.email,
  password: inputSchema.password,
})

export const registerSchema = yup.object({
  firstName: inputSchema.nameField('First name'),
  lastName: inputSchema.nameField('Last name'),
  email: inputSchema.email,
  password: inputSchema.password,
})
