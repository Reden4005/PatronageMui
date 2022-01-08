import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

interface State {
  visible: boolean;
  edit: User;
}

const initialEditState = {
  id: "",
  name: "",
  lastName: "",
  email: "",
  age: 0,
  gender: "undefined",
  phoneNumber: "",
  address: "",
  dateOfBirth: "",
  hobbiesName: [],
};
const editSlice = createSlice({
  name: "edit",
  initialState: { visible: false, edit: initialEditState } as State,
  reducers: {
    toggle(state, action) {
      state.visible = true;
      state.edit = {
        id: action.payload.id,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        age: action.payload.age,
        gender: action.payload.gender,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address,
        dateOfBirth: action.payload.dateOfBirth,
        hobbies: action.payload.hobbies,
        hobbiesName: action.payload.hobbiesName,
      };
    },
    close(state) {
      state.visible = false;
      state.edit = initialEditState;
    },
  },
});

export const editActions = editSlice.actions;

export default editSlice;
