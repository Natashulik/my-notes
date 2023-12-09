import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Note = {
  id: number;
  title: string;
  editMode: boolean;
};

type NotesState = {
  notes: Note[];
};

const initialState: NotesState = {
  notes: [
    { id: 1, title: "Заметка № 1", editMode: false },
    { id: 2, title: "Заметка № 2", editMode: false },
    { id: 3, title: "Заметка № 3", editMode: false },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNewNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    changeNoteTitle: (
      state,
      action: PayloadAction<{ id: number; newTitle: string }>
    ) => {
      state.notes = state.notes.map((item) =>
        item.id !== action.payload.id
          ? item
          : { ...item, title: action.payload.newTitle }
      );
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.map((item) =>
        item.id === action.payload
          ? { ...item, editMode: !item.editMode }
          : item
      );
    },
  },
});

export const { setNewNote, changeNoteTitle, deleteNote, editNote } =
  notesSlice.actions;
export default notesSlice.reducer;
