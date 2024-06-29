export type MealProps = {
  title: string;
  data: MealDTO[];
};

export type MealDTO = {
  id?: any;
  name: string;
  description: string;
  date: string;
  hour: string;
  isOnDiet: boolean;
};
