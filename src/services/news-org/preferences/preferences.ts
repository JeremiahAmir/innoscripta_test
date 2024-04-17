import { MultiValue } from "react-select";

type Preference = {
  value: string;
  label: string;
};
// export const setPreferences = (categories: Preference[], authors: Preference[], sources: Preference[]) => {
//     setPreference('categories', categories)
//     setPreference('authors', authors)
//     setPreference('sources', sources)
// }

export const setPreference = (name: string, data: any): void => {
  localStorage.setItem(`${name}`, JSON.stringify(data));
};

export const getPreference = (name: string): Preference[] | [] => {
  const preference = localStorage.getItem(`${name}`);
  if (preference) {
    return JSON.parse(preference);
  }

  return [];
};
