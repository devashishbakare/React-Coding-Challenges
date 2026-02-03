import { useState } from "react";
import InputComponent from "./InputComponent";

export const FormComponent = () => {
  type InputAndErrorDetails = {
    firstName: string;
    lastName: string;
    password: string;
    mobileNumber: string;
    confirmPassword: string;
  };

  const [formDetails, setFormDetails] = useState<InputAndErrorDetails>({
    firstName: "",
    lastName: "",
    password: "",
    mobileNumber: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<InputAndErrorDetails>({
    firstName: "",
    lastName: "",
    password: "",
    mobileNumber: "",
    confirmPassword: "",
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: keyof InputAndErrorDetails,
  ) {
    const value = e.target.value;
    const formUpdatedDetails: InputAndErrorDetails = {
      ...formDetails,
      [type]: value,
    };
    setFormDetails(formUpdatedDetails);
  }

  function validateInput() {
    const saveErrors = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    };

    if (formDetails.firstName.length < 2) {
      saveErrors.firstName = "First Name length must be more than 1";
    } else {
      saveErrors.firstName = "";
    }
    if (formDetails.lastName.length < 2) {
      saveErrors.lastName = "Last Name length must be more than 1";
    } else {
      saveErrors.lastName = "";
    }

    if (formDetails.mobileNumber.length != 10) {
      saveErrors.mobileNumber = "Mobile Number must be 10 digit long";
    } else {
      saveErrors.mobileNumber = "";
    }

    if (formDetails.password.length < 8) {
      saveErrors.password = "password must be > 8";
    } else {
      saveErrors.password = "";
    }

    if (formDetails.confirmPassword !== formDetails.password) {
      saveErrors.confirmPassword = "Confirm password missmatch";
    } else {
      saveErrors.confirmPassword = "";
    }

    setErrors(saveErrors);
    return !Object.values(saveErrors).some((error) => error.length > 0);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    //const controller = new AbortController();
    if (validateInput()) {
      alert("data sent successfully");
      setFormDetails({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      });
      // try {
      //   const response =await fetch("url", {signal: controller.signal})
      //   set api response if you want response.json()
      // } catch (error) {
      //   set error message or display notification : showNotification(error);
      // }
    } else {
      alert("Input validation Failed");
    }
  }

  return (
    <div className="h-screen w-screen centerDiv flex-col gap-[10px]">
      <div className="mb-[10px] addHeadingCss addFont font-bold text-[3rem]">
        Register User
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="h-auto min-w-[350px] flex flex-col p-[10px] gap-[20px] rounded-[10px] md:w-[500px] addShadow items-center pt-[30px]"
      >
        <InputComponent
          type="text"
          onChange={(e) => handleInputChange(e, "firstName")}
          name="firstName"
          error={errors.firstName}
          placeHolder="Enter Your First Name"
        />
        <InputComponent
          type="text"
          onChange={(e) => handleInputChange(e, "lastName")}
          name="lastName"
          error={errors.lastName}
          placeHolder="Enter Your Last Name"
        />
        <InputComponent
          type="number"
          onChange={(e) => handleInputChange(e, "mobileNumber")}
          name="mobileNumber"
          error={errors.mobileNumber}
          placeHolder="Enter Your Mobile Number"
        />
        <InputComponent
          type="password"
          onChange={(e) => handleInputChange(e, "password")}
          name="password"
          error={errors.password}
          placeHolder="Enter Your Password"
        />
        <InputComponent
          type="password"
          onChange={(e) => handleInputChange(e, "confirmPassword")}
          name="confirmPassword"
          error={errors.confirmPassword}
          placeHolder="Confirm Your Password"
        />

        <button
          className="h-[50px] w-[150px] addShadow bg-blue-400 rounded-[30px] font-bold text-[1.2rem]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormComponent;
