import ContentEditable from "react-contenteditable";
import { useAppDispatch, useAppSelector } from "../hook";
import { changeNoteTitle, deleteNote, editNote } from "../redux/notesSlice";
import { createTag } from "../redux/inputSlice";

function Notes(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedTags = useAppSelector((state) => state.input.selectedTags);
  const notes = useAppSelector((state) => {
    if (selectedTags && selectedTags.length > 0) {
      return state.notes.notes.filter((note) =>
        selectedTags.some((tag) => note.title.includes(tag))
      );
    } else return state.notes.notes;
  });

  const tags = useAppSelector((state) => state.input.tags);

  const changeInput = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(changeNoteTitle({ id, newTitle: event.target.value }));
  };

  const handleDeleteNote = (id: number): void => {
    dispatch(deleteNote(id));
  };

  const handleClick = (id: number, editMode: boolean, title: string): void => {
    if (editMode) {
      console.log(title);
      const words = title.split(" ");
      const tagsInNote = words.filter((word) => word.startsWith("#")); // массив тегов  в заметке

      if (tagsInNote.length !== 0) {
        tagsInNote.forEach((item) => {
          if (!tags.includes(item)) {
            dispatch(createTag(item));
          }
        });
      }
    }
    toggle(id, editMode, title);
  };

  const toggle = (id: number, editMode: boolean, title: string): void => {
    dispatch(editNote(id));
  };

  return (
    <>
      {notes.map((item) => (
        <div className="notes-wrap" key={item.id}>
          {item.editMode ? (
            <input
              value={item.title}
              onChange={(event) => changeInput(item.id, event)}
              className="input-note-title"
            />
          ) : (
            <p className="note-title">{item.title}</p>
          )}
          <button
            className="button-edit"
            onClick={() => handleClick(item.id, item.editMode, item.title)}
          >
            {item.editMode ? "✔" : "✎"}{" "}
          </button>
          <button
            className="button-close"
            onClick={() => handleDeleteNote(item.id)}
          >
            ✖
          </button>
        </div>
      ))}
    </>
  );
}

export default Notes;
