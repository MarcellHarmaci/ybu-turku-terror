import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select as ShadcnSelect,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"
import {
  Controller,
  type ControllerProps,
  type FieldValues,
} from "react-hook-form"

export interface SelectItem {
  value: string
  label: string
}

type SelectProps<TFieldValues extends FieldValues = FieldValues> = {
  label: string
  description?: string
  items: SelectItem[]
} & Pick<ControllerProps<TFieldValues>, "control" | "name"> &
  ComponentProps<"input">

function Select<TFieldValues extends FieldValues = FieldValues>(
  props: SelectProps<TFieldValues>
) {
  const { label, description, items, control, name, ...inputProps } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field orientation="vertical" data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputProps.id}>{label}</FieldLabel>
          <ShadcnSelect
            {...field}
            name={field.name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={inputProps.id}
              aria-invalid={fieldState.invalid}
              className={cn("shadow-sm", inputProps.className)}
            >
              <SelectValue placeholder={inputProps.placeholder} />
            </SelectTrigger>
            <SelectContent position="item-aligned">
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </ShadcnSelect>
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

export default Select
