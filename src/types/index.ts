/** type UserData for data from form */
import moment from "moment";

export interface UserData {
  id: string;
  name: string;
  lastName: string;
  email: string;
  age: number;
  gender: "male" | "female";
  phoneNumber: string;
  address: string;
  dateOfBirth: moment.Moment;
  hobbies: string[];
  hobbiesName?: string[];
}

/** type User for data from base of users*/
export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  age: number | string;
  gender: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  hobbies?: string[];
  hobbiesName?: string[];
}

export type Hobbie = {
  id: string;
  name: string;
};
