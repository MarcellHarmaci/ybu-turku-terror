import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { type ComponentProps } from "react"
import {
  Controller,
  type ControllerProps,
  type FieldValues,
} from "react-hook-form"

type TextInputProps<TFieldValues extends FieldValues = FieldValues> = {
  label: string
  placeholder: string
  description?: string
} & Pick<ControllerProps<TFieldValues>, "control" | "name"> &
  ComponentProps<"input">

function TextInput<TFieldValues extends FieldValues = FieldValues>(
  props: TextInputProps<TFieldValues>
) {
  const { label, placeholder, description, control, name, ...inputProps } =
    props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputProps.id}>{label}</FieldLabel>
          <Input
            {...field}
            {...inputProps}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

export default TextInput
