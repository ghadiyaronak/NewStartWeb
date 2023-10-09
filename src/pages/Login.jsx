import React, { useState } from "react";
import { Form, CheckBox, Link, FormItem, } from "@ui5/webcomponents-react";
import imge from "../logo.svg";

// import { USER_AUTH } from "../store/utils/url";
// import * as Yup from "yup"
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import client from "../config/client";
// import { setCredentials } from "../store/slices/authSlice.ts";
// import { ErrorMSG } from "../ErrorMessage";

import { useFormik } from "formik"
import { useNavigate } from "react-router";
import { config } from "../store/utils/apiConstant";
import { Api } from "../services/api";
import { Stack, useToast } from "@chakra-ui/react";
import CustomInputField from "../components/field/CustomInputField";
import CustomPasswordField from "../components/field/CustomPasswordField";
import LoginButton from "../components/buttonscomp/LoginButton";
import { LoginSchema } from "../validation/LoginValidation";
import { useAppDispatch } from "../store/hooks";
import { APIEndPointList } from "../services/endpoint";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  // const [loader, setLoader] = useState(false);

  const onSubmit = async (values) => {
    const response = await Api(config.method.POST, APIEndPointList.login, {
      UserID: values.username,
      Password: values.password,
      YearID: "2",
      CompanyID: "1",
      DeviceType: "Laptop",
      DeviceName: "RaviHP",
      DeviceOS: "Windows",
      DeviceId: "123456",
    });
    setIsLoading(true);
    if (response.data) {
      if (response.data.Status) {
        if (response.data.Data) {
          dispatch(
            Login({
              IDNumber: response.data.Data.IDNumber,
              UserName: response.data.Data.UserName,
              UserID: response.data.Data.UserID,
              CompanyID: response.data.Data.CompanyID,
              CompanyName: response.data.Data.CompanyName,
              FromYear: response.data.Data.FromYear,
              ToYear: response.data.Data.ToYear,
              ErrorMessage: response.data.Data.ErrorMessage,
              accessToken: response.data.Data.accessToken,
            })
          );
          navigate("/dashboard");
          console.log(response.data.data);
        }
        toast.success(response.data.ErrorMessage);
      } else {
        toast.error(response.data.ErrorMessage);
      }
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };



  // const onSubmit = async () => {
  //   setIsLoading(true);
  //   try {
  //     const result = await client.post(USER_AUTH, values);
  //     dispatch(setCredentials(result?.data?.data));
  //     navigate("/dashboard");

  //   } catch (error) {
  //     setIsLoading(false);
  //     toast({
  //       title: error?.data?.ErrorMessage,
  //       position: "top-right",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true
  //     });
  //   }
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit
  });


  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", }}>
        <div
          style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "90%", maxWidth: "300px", textAlign: "center" }}
        >
          <img src={imge} alt="Company Logo" style={{ width: "200px", marginBottom: "20px" }} />
          <Form title="Login Form" onSubmit={handleSubmit} autoComplete="off">

            <Stack spacing={4}>
              <CustomInputField
                label={"Username"}
                name="username"
                Type="username"
                values={values.username}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.username}
                touched={touched.username}
                isMandatory={true}
              />

              <CustomPasswordField
                label={"Password"}
                name="password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
                isMandatory={true}
              />

              <FormItem>
                <CheckBox text="Keep me signed in" />
              </FormItem>

              <FormItem>
                <Link href="/signup">Doesn't have account Sign Up from here</Link>
              </FormItem>

              <Stack spacing={10}>
                <LoginButton label={"login"} isSubmitting={isLoading} />
              </Stack>

            </Stack>

            <>
              {/* <FormItem label="User Name">
              <Input placeholder="Enter your username" 
              name="username" 
              type="text"

              onChange={e => setUsername(e.target.value)} />
            </FormItem> */}

              {/* <FormItem label="User Name">
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
            </FormItem> */}

              {/* <FormItem label="Password">
              <Input 
              type="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password" 
              autocomplete="current-password"
              />
            </FormItem> */}

              {/* <FormItem>
              <CheckBox text="Keep me signed in" />
            </FormItem> */}
              {/* <FormItem>
              <Button design="Emphasized" type="submit" isLoading={isLoading} >Sign In</Button>

            </FormItem> */}
              {/* <FormItem>
              <Link href="/signup">Doesn't have account Sign Up from here</Link>
            </FormItem> */}
            </>

          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;