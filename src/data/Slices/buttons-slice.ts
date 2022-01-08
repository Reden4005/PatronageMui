import { createSlice } from "@reduxjs/toolkit";

const buttonsSlice = createSlice({
  name: "buttons",
  initialState: {
    buttons: new Array<string>(),
  },
  reducers: {
    addButton(state, action) {
      const actualState = state.buttons;
      let button: HTMLButtonElement | null = document.querySelector(
        `#${action.payload}`
      );
      let tick: HTMLSpanElement | null = document.querySelector(
        `#tick${action.payload.slice(3)}`
      );
      if (!actualState.includes(action.payload)) {
        state.buttons.push(action.payload);
        button!.style.background = "white";
        button!.style.color = "green";
        tick!.style.visibility = "visible";
      } else {
        state.buttons = actualState.filter(btn => btn !== action.payload);
        tick!.style.visibility = "hidden";
        button!.style.background = "white";
        button!.style.color = "#B958A5";
      }
    },

    buttonsClear(state) {
      for (let i = 0; i < state.buttons.length; i++) {
        let button: HTMLButtonElement | null = document.querySelector(
          `#${state.buttons[i]}`
        );
        let tick: HTMLSpanElement | null = document.querySelector(
          `#tick${state.buttons[i].slice(3)}`
        );
        button!.style.background = "white";
        button!.style.color = "#1890ff";
        button!.disabled = false;
        tick!.style.visibility = "hidden";
      }
      state.buttons = [];
    },
  },
});

export const buttonsActions = buttonsSlice.actions;
export default buttonsSlice;
