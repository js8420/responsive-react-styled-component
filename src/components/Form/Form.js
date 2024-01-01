import { useState } from "react";
import { Container } from "../../GlobalStyle";
import {
  FormSection,
  FormRow,
  FormText,
  SignupForm,
  FormItem,
  Label,
  Input,
  FormButton,
  FormMessage,
} from "../../components/Form/FormStyle";

import ValidateForm from "./ValidateForm";

const Form = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const formData = [
    {
      label: "Name",
      name: "name",
      value: formInputs.name,
      type: "text",
      placeholder: "Enter your name",
      onChange: (e) =>
        setFormInputs((previousState) => ({
          ...previousState,
          name: e.target.value,
        })),
    },
    {
      label: "Email",
      name: "email",
      value: formInputs.email,
      type: "email",
      placeholder: "Enter your email",
      onChange: (e) =>
        setFormInputs((previousState) => ({
          ...previousState,
          email: e.target.value,
        })),
    },
    {
      label: "Password",
      name: "password",
      value: formInputs.password,
      type: "password",
      placeholder: "Enter your password",
      onChange: (e) =>
        setFormInputs((previousState) => ({
          ...previousState,
          password: e.target.value,
        })),
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      value: formInputs.confirmPassword,
      type: "password",
      placeholder: "Enter your confirm password",
      onChange: (e) =>
        setFormInputs((previousState) => ({
          ...previousState,
          confirmPassword: e.target.value,
        })),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultError = ValidateForm(formInputs);

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setFormInputs({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setError(null);
    setSuccess("Form is submitted successfully.");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormText>Sign up</FormText>
          <SignupForm onSubmit={handleSubmit}>
            {formData.map((data, index) => (
              <FormItem key={index}>
                <Label htmlFor={data.value}>{data.label}</Label>
                <Input
                  type={data.type}
                  name={data.value}
                  value={data.value}
                  placeholder={data.placeholder}
                  onChange={data.onChange}
                />
              </FormItem>
            ))}

            <FormButton type="submit">Signup</FormButton>
          </SignupForm>
          {error && (
            <FormMessage
              variant={messageVariants}
              initial="hidden"
              animate="animate"
              error
            >
              {error}
            </FormMessage>
          )}

          {success && (
            <FormMessage
              variant={messageVariants}
              initial="hidden"
              animate="animate"
            >
              {success}
            </FormMessage>
          )}
        </FormRow>
      </Container>
    </FormSection>
  );
};
export default Form;
