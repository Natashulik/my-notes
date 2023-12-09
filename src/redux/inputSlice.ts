import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InputState = {
  inputText: string;
  isEmpty: boolean;
  selectedTags: string[];
  tags: string[];
};

const initialState: InputState = {
  inputText: "",
  isEmpty: false,
  selectedTags: [],
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
    createTag: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((item) => item !== action.payload);
    },
    addSelectedTags: (state, action: PayloadAction<string>) => {
      state.selectedTags.push(action.payload);
    },
    cancelSelectedTags: (state) => {
      state.selectedTags.splice(0, state.selectedTags.length);
    },
  },
});

export const {
  setInputText,
  setIsEmpty,
  createTag,
  deleteTag,
  addSelectedTags,
  cancelSelectedTags,
} = inputSlice.actions;

export default inputSlice.reducer;
