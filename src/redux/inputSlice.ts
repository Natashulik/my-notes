import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tag = {
  id: number;
  title: string;
};

type InputState = {
  inputText: string;
  isEmpty: boolean;
  tags: Tag[];
};

const initialState: InputState = {
  inputText: "",
  isEmpty: false,
  tags: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    setIsEmpty: (state, action: PayloadAction<boolean>) => {
      state.isEmpty = action.payload;
    },
    createTag: (state, action: PayloadAction<Tag>) => {
      state.tags.push(action.payload);
    },
  },
});

export const { setInputText, setIsEmpty, createTag } = inputSlice.actions;

export default inputSlice.reducer;
