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
  description?: string
} & Pick<ControllerProps<TFieldValues>, "control" | "name"> &
  ComponentProps<"input">

function TextInput<TFieldValues extends FieldValues = FieldValues>(
  props: TextInputProps<TFieldValues>
) {
  const { label, description, control, name, ...inputProps } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputProps.id}>{label}</FieldLabel>
          <Input {...inputProps} {...field} aria-invalid={fieldState.invalid} />
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

export default TextInput
