import React, { useState } from "react";
import {Form,Input,Button,CheckBox,Link,FormItem,} from "@ui5/webcomponents-react";
import imge from "../logo.svg";
import Footer from "../components/Footer";
import { USER_AUTH } from "../store/utils/url";
import { useFormik} from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router";
import { errormsg } from "../services/Errormsg";

const Login = () => {  
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loader, setLoader] = useState(false);


  const handleLogin = () => {
    setIsLoading(true)
    console.warn({username,password});
    let data = { username, password}
    fetch(USER_AUTH, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      navigate("/dashboard")
      result.json().then((resp) =>{
        console.log(resp)
      })
    })
  }

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
      companyID: "",
      yearID: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(errormsg.username),
      password: Yup.string().required(errormsg.password),
      companyID: Yup.object().required(),
      yearID: Yup.object().required(),
    }),
    onSubmit: async (values) => {
      handleLogin(values);
    },
  });


  // const handleLogin = async (values) => {
  //   const response = await Api(config.method.POST, APIEndPointList.login, {
  //     UserID: values.username,
  //     Password: values.password,
  //     YearID: values.yearID.value,
  //     CompanyID: values.companyID.value,
  //     DeviceType: "Laptop",
  //     DeviceName: "RaviHP",
  //     DeviceOS: "Windows",
  //     DeviceId: "123456",
  //   });
  //   setLoader(true);
  //   if (response.data) {
  //     if (response.data.Status) {
  //       if (response.data.Data) {
  //         dispatch(
  //           login({
  //             IDNumber: response.data.Data.IDNumber,
  //             UserName: response.data.Data.UserName,
  //             UserID: response.data.Data.UserID,
  //             CompanyID: response.data.Data.CompanyID,
  //             CompanyName: response.data.Data.CompanyName,
  //             FromYear: response.data.Data.FromYear,
  //             ToYear: response.data.Data.ToYear,
  //             ErrorMessage: response.data.Data.ErrorMessage,
  //             accessToken: response.data.Data.accessToken,
  //           })
  //         );
  //         navigate("/dashboard");
  //       }
  //       toast.success(response.data.ErrorMessage);
  //     } else {
  //       toast.error(response.data.ErrorMessage);
  //     }
  //   } else {
  //     toast.error(response.message);
  //   }
  //   setLoader(false);
  // };


//   const loginSchema = yup.object().shape({})

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: {
//         username: "",
//         password: ""
//     },
//     validationSchema: loginSchema,
//     onSubmit
// });

  return (
    <>
      <div
        style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", }}>
        <div
          style={{ border: "1px solid #ccc",padding: "20px",borderRadius: "5px",width: "90%",maxWidth: "300px",textAlign: "center"}}
        >
          <img src={imge} alt="Company Logo" style={{ width: "200px", marginBottom: "20px" }} />
          <Form title="Login Form" onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}>
            {/* <FormItem label="User Name">
              <Input placeholder="Enter your username" 
              name="username" 
              type="text"

              onChange={e => setUsername(e.target.value)} />
            </FormItem> */}

            <FormItem label="User Name">
                <div className="d-flex flex-column w-100">
                  <Input
                    className="w-100"
                    name="username"
                    placeholder="Enter user name"
                    onBlur={validation.handleBlur}
                    onChange={(e) => {
                      validation.handleChange(e);
                    }}
                    value={validation.values.username}
                  />
                  <div className="text-danger">
                    <small>
                      {validation.touched && validation.errors.username}
                    </small>
                  </div>
                </div>
              </FormItem>

              <FormItem label="Password">
                <div className="d-flex flex-column w-100">
                  <Input
                    className="w-100"
                    type="Password"
                    placeholder="Enter password"
                    name="password"
                    onChange={(e) => {
                      validation.handleChange(e);
                    }}
                    value={validation.values.password}
                  />
                  <div className="text-danger">
                    <small>{validation.errors.password}</small>
                  </div>
                </div>
              </FormItem>

            {/* <FormItem label="Password">
              <Input 
              type="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password" 
              autocomplete="current-password"
              />
            </FormItem> */}

            <FormItem>
              <CheckBox text="Keep me signed in" />
            </FormItem>
            <FormItem>
              <Button design="Emphasized" type="submit" isLoading={isLoading} onClick={handleLogin}>Sign In</Button>
             
            </FormItem>
            <FormItem>
              <Link href="/signup">Doesn't have account Sign Up from here</Link>
            </FormItem>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
