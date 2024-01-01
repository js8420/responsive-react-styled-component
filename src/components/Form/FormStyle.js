import styled from "styled-components";
import { Section } from "../../GlobalStyle";
import { motion } from "framer-motion";

export const FormSection = styled(Section)`
  height: 90vh;
  padding: 160px 0;
  background-color: #101522;
`;

export const FormRow = styled.div`
  max-width: 62%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px 20px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormText = styled.h1`
  color: #000;
  text-align: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const SignupForm = styled.form``;

export const FormButton = styled.button`
  width: 100%;
  background: none;
  font-size: 1.4rem;
  white-space: nowrap;
  border-radius: 4px;
  margin-top: 1.5rem;
  outline: none;
  padding: 5px 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.4s ease;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 1.4rem;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

export const Input = styled.input`
  font-size: 1rem;
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #cfcfcf;
`;

export const FormMessage = styled(motion.div)`
  color: ${({ error }) => (error ? "red" : "green")};
  padding: 5px;
  text-align: center;
  margin-top: 1rem;
`;
