import { Input } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function TextInput({ name, type, ...rest }) {
  const { register, errors } = useFormContext();

  return (
    <>
      <Input
        type={type}
        {...register(name, {
          valueAsNumber: type === "number" ? true : false,
        })}
        {...rest}
      ></Input>
      {errors[name] ? <p>{errors[name].message}</p> : null}
    </>
  );
}
