"use client";

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
type SelectOptions = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
}

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  options,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            value={value}
            placeholder={placeholder}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
