import * as yup from "yup";

import {
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  phoneSchema,
  passwordSchema,
  confirmPasswordSchema,
  citySchema,
} from "./common";

export const customerRegistrationSchema = yup.object({
  firstName: firstNameSchema,

  lastName: lastNameSchema,

  email: emailSchema,

  phone: phoneSchema,

  password: passwordSchema,

  confirmPassword: confirmPasswordSchema,

  city: citySchema,
});
