import { ComponentProps } from "react";
import { Input } from ".";
import { Controller, useFormContext } from "react-hook-form";
import { FieldWrapper } from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
};
export const InputField = ({
  label,
  name,
  containerClassName,
  required,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required && "Campo obrigatorio" }}
      render={({ field, fieldState }) => (
        <FieldWrapper
          label={label}
          className={containerClassName}
          error={fieldState?.error}
        >
          <Input {...props} {...field} />
        </FieldWrapper>
      )}
    />
  );
};
