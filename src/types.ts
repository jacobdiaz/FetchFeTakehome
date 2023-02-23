export type State = { name?: string; abbreviation?: string };
export type FormValues = {
  Email: string;
  Name: string;
  Password: string;
  Occupation: string;
  State: State;
  hasValidInputs: boolean;
};
