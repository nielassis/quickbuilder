import { Switch } from ".";
import { Controller, useFormContext } from "react-hook-form";

type SwitchFieldProps = {
  name: string;
  className?: string;
};
export const SwitchField = ({ name, ...props }: SwitchFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Switch
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  );
};
