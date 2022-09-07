import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .required("Please enter username")
    .min(6, "Must be 6 characters or less")
    .matches(/^[a-z0-9_\.]+$/, "Only contains lowercase, number, dot, dash"),
  password: Yup.string()
    .required("Please enter password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
      message:
        "Must contain 8 characters, one uppercase, one lowercase, one number and one special",
    }),
});

export const signupSchema = Yup.object({
  username: Yup.string()
    .required("Please enter username")
    .min(6, "Must be 6 characters or less")
    .matches(/^[a-z0-9_\.]+$/, {
      message: "Only contains lowercase, number, dot, dash",
    }),
  password: Yup.string()
    .required("Please enter password")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, {
      message:
        "Must contains 8 characters, one uppercase, one lowercase, one number and one special",
    }),
  confirm_password: Yup.string()
    .required("Please enter password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  email: Yup.string()
    .required("Please enter email")
    .email("Invalid email format"),
});
