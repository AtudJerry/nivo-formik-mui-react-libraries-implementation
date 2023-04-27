import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik, useFormik, validateYupSchema } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "The name you entered is too long")
        .required("required"),
        password : Yup.string().min(8, "password is too short").required('required'),
        email : Yup.string().email().required('required')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);

  return (
    <Formik>
      <form onSubmit={formik.handleSubmit}>
        <Box mt="30px" sx={{ display: "flex", flexDirection: "column" }}>
          <div>
            <TextField
            required
              className="textfield1"
              name="fullName"
              label="Enter your full name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              autoFocus="true"
              preventScroll = "true"
              variant="standard"
              onBlur = {formik.handleBlur}
            />{" "}
            {formik.touched.fullName && formik.errors.fullName ? <p> invalid</p> : null}
          </div>
          <br></br>

          <div>
          <TextField
            className="textfield2"
            variant="filled"
            name="password"
            label="Enter your password"
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="standard"
            onBlur = {formik.handleBlur}

          /> {formik.touched.password && formik.errors.password ? <p>password is too short</p> : null} </div>
          <br></br>
          <div>
          <TextField
            className="textfield3"
            name="email"
            label="Enter your email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="standard"
            onBlur={formik.handleBlur}
          />{formik.touched.email && formik.errors.email ? <p>wrong email format</p> : null} </div>
          <br></br>
          <Button
            className="submitbutton"
            type="submit"
            variant="contained"
            color="success"
          >
            submit
          </Button>
        </Box>
      </form>
    </Formik>
  );
}
export default Signup;

// import React from "react";
// import * as yup from "yup";
// import { ErrorMessage, Formik, useFormik, validateYupSchema } from "formik";
// import { TextField } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Box from "@mui/material/Box";

// function Signup() {
//   const adjust = useMediaQuery("(min-width : 600px)");
//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     address1: "",
//     address2: "",
//   };
//   const phoneRegExp =
//     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//   const userSchema = yup.object().shape({
//     firstName: yup.string().required("required"),
//     lastName: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     contact: yup
//       .string()
//       .matches(phoneRegExp, "phone number is not valide")
//       .required("required"),
//     address1: yup.string().required("required"),
//     address2: yup.string().required("required"),
//   });
//   // const formik = useFormik({
//   //     initialValues : {
//   //         firstName : "",
//   //         lastName :"",
//   //         email : ""
//   //     }
//   // })

//   return (
//     <Box m="10px">
//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validateYupSchema={userSchema}
//       >
//         {({values, errors, touched,handleBlur,handleChange,handleFormSubmit}) => (
//             <Box>
//                  <form onSubmit={handleFormSubmit}>
//                     <Box display= "grid" gap = "30px" gridTemplateColumns= "repeat(4, minmax(0, 1fr))"

//                     sx = {{"& > div" : {gridColumn : adjust ? undefined: "span 4"} }} >

//                         <TextField fullWidth
//                         variant="filled"
//                         type="text"
//                         label = "First Name"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.firstName}
//                         name="firstName"
//                         error={!!touched.firstName && !!errors.firstName}
//                         helperText={touched.firstName && ErrorMessage.firstName}
//                         sx = {{gridColumn : "span 2"}}>
//                         </TextField>

//                         <TextField fullWidth
//                         variant="filled"
//                         type="text"
//                         label = "Last Name"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.lastName}
//                         name="lastName"
//                         error = {touched.lastName && errors.lastName}
//                         helperText={touched.lastName && errors.lastName}
//                         sx = {{gridColumn : "span 2"}}>
//                         </TextField>

//                         <TextField fullWidth
//                         variant="filled"
//                         type="text"
//                         label = "Email"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.email}
//                         name="email"
//                         error={!!touched.email && !!errors.email}
//                         helperText={touched.email && errors.email}
//                         sx = {{gridColumn : "span 2"}}>
//                         </TextField>

//                         <TextField fullWidth
//                         variant="filled"
//                         type="text"
//                         label = "Contact Number"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.contact}
//                         name="contact"
//                         error={!!touched.contact && !!errors.contact}
//                         helperText={touched.contact && errors.contact}
//                         sx = {{gridColumn : "span 4"}}>
//                         </TextField>

//                     </Box>
//                     <Box display="flex" justifyContent="end" mt = "20px">
//                         <button type="submit" color="secondary" variant = "contained">create new user</button>
//                     </Box>

//         </form>

//             </Box>

//         )
//         }

//       </Formik>
//     </Box>
//   );

//   {
//     /* <br></br>
//             <form>
//                 <div>
//                 <input id = "firstName" name ="firstName" type="text"  placeholder="Enter your first name" onChange={formik.handleChange} value={formik.values.firstName} />
//                 </div>
//                 <div>
//                 <input onChange={formik.handleChange} placeholder="Enter your last name" type="text" value={formik.contact} />
//                 </div>
//                 <div>
//                 <input  onChange={formik.handleChange} placeholder="Enter your email" type="text" value={formik.values.email} />
//                 </div>

//             </form> */
//   }

//   //     )
// }
// export default Signup;
