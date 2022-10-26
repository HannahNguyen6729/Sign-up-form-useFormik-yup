import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
const SignupForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       name: "",
  //       phone: "",
  //       password: "",
  //       confirmedPassword: "",
  //     },
  //     validationSchema: Yup.object({
  //       name: Yup.string()
  //         .required("Required")
  //         .min(4, "Must be 4 characters or more"),
  //       email: Yup.string()
  //         .required("Required")
  //         .matches(
  //           /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  //           "Please enter a valid email address"
  //         ),
  //       password: Yup.string()
  //         .required("Required")
  //         .matches(
  //           /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
  //           "Password must be 7-19 characters and contain at least one letter, one number and a special character"
  //         ),
  //       confirmedPassword: Yup.string()
  //         .required("Required")
  //         .oneOf([Yup.ref("password"), null], "Password must match"),
  //       phone: Yup.string()
  //         .required("Required")
  //         .matches(
  //           /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  //           "Must be a valid phone number"
  //         ),
  //     }),
  //     onSubmit: (values) => {
  //       window.alert("Form submitted");
  //       console.log(values);
  //     },
  //   });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      phoneNumber: "",
    },
    //validate
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirmedPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
      phoneNumber: Yup.string()
        .required("Required")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Must be a valid phone number"
        ),
    }),
    //submit
    onSubmit: (values) => {
      window.alert("submitted successfully");
      console.log(values);
    },
  });
  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && (
          <p className="errorMsg "> {formik.errors.name} </p>
        )}

        <label> Your email </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <p className="errorMsg "> {formik.errors.email} </p>
        )}

        <label> Your password </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <p className="errorMsg "> {formik.errors.password} </p>
        )}

        <label> Confirm password </label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          placeholder="Confirm your password"
          onChange={formik.handleChange}
          value={formik.values.confirmedPassword}
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg "> {formik.errors.confirmedPassword} </p>
        )}

        <label> Your phone number </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter your phone number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber && (
          <p className="errorMsg "> {formik.errors.phoneNumber} </p>
        )}

        <button type="submit">Submit</button>
      </form>

      {/* <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}
        <label> Email address </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        {formik.errors.email && (
          <p className="errorMsg"> {formik.errors.email} </p>
        )}
        <label> Password </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.password && (
          <p className="errorMsg"> {formik.errors.password} </p>
        )}
        <label> Confirm Password </label>
        <input
          type="text"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
        )}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.phone} </p>
        )}
        <button type="submit"> Continue </button>
      </form> */}
    </section>
  );
};

export default SignupForm;
