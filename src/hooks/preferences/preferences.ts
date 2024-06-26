import {PreferenceType} from "../../types/PreferenceType";

export const setPreference = (name: string, data: any): void => {
  localStorage.setItem(`${name}`, JSON.stringify(data));
};

export const getPreference = (name: string): PreferenceType[] | [] => {
  const preference = localStorage.getItem(`${name}`);
  if (preference) {
    return JSON.parse(preference);
  }

  return [];
};
