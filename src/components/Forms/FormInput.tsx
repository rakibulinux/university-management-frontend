"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  palceholder?: string;
  validation?: object;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  palceholder,
  validation,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => <Input />}
    />
  );
};

export default FormInput;
