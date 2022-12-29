import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Formik } from "formik";
import React from "react";
import { login, register } from "../../apis/authApi";
import { FormBox, LoginButton } from "./LandingPageStyles";

const OrganizerLogin = () => {
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const toggleRegister = () => {
    setShowRegistration(!showRegistration);
  };
  function pick(obj, ...props) {
    return props.reduce(function (result, prop) {
      result[prop] = obj[prop];
      return result;
    }, {});
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        username: "",
        confirmpassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (showRegistration) {
          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length < 8) {
            errors.username = "Username must be atleast 8 characters";
          }
          if (!values.confirmpassword) {
            errors.confirmpassword = "Required";
          } else if (values.confirmpassword !== values.password) {
            errors.confirmpassword =
              "Confirm password must be same as password";
          }
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be atleast 8 characters";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        if (showRegistration) {
          const data = pick(values, "email", "password", "username");
          const response = await register(data);
          if (response.error) {
            console.log(response?.exception?.response?.data);
          } else {
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            console.log(userDetails);
          }
        } else {
          const data = pick(values, "email", "password");
          const response = await login(data);
          if (response.error) {
            console.log(response?.exception?.response?.data);
          } else {
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            console.log(userDetails);
          }
        }
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <FormBox>
            {showRegistration && (
              <TextField
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                label="Username"
                error={errors.username && touched.username && errors.username}
                helperText={touched.username && errors.username}
              />
            )}
            <TextField
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="Email"
              error={errors.email && touched.email && errors.email}
              helperText={touched.email && errors.email}
            />

            <TextField
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              label="Password"
              error={errors.password && touched.password && errors.password}
              helperText={touched.password && errors.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {showRegistration && (
              <TextField
                name="confirmpassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmpassword}
                label="Confirm Password"
                error={
                  errors.confirmpassword &&
                  touched.confirmpassword &&
                  errors.confirmpassword
                }
                helperText={touched.confirmpassword && errors.confirmpassword}
                type="password"
              />
            )}

            <LoginButton
              variant="outlined"
              type="submit"
              disabled={isSubmitting}
            >
              {showRegistration ? "Register" : "Login"}
            </LoginButton>
            <Typography variant="body1">
              {showRegistration
                ? "Don't have an account? "
                : "Already have an account? "}
              <Button color="secondary" variant="text" onClick={toggleRegister}>
                {showRegistration ? "Sign in" : "Sign up"}
              </Button>
            </Typography>
          </FormBox>
        </form>
      )}
    </Formik>
  );
};

export default OrganizerLogin;
