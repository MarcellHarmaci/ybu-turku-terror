export interface FoodPlace {
  name: string
  hours: string
  note?: string
  description?: string
  discount?: string
  address?: string
}

export interface FoodGroup {
  group: string
  places: FoodPlace[]
}

export type FoodOption = FoodPlace | FoodGroup