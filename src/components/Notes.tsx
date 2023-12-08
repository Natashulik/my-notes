import { Typography, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../hook";
import { changeNoteTitle, deleteNote, editNote } from "../redux/notesSlice";
import { createTag } from "../redux/inputSlice";

function Notes(): JSX.Element {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);
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
      const tagsInTitle = words.filter((word) => word.startsWith("#"));

      if (tagsInTitle.length !== 0) {
        tagsInTitle.forEach((item) => {
          const newTag = { id: Date.now(), title: item };
          console.log(newTag);
          if (!tags.some((existingTag) => existingTag.title === newTag.title)) {
            dispatch(createTag(newTag));
          }
        });
      }
    }
    toggle(id, editMode);
  };

  const toggle = (id: number, editMode: boolean): void => {
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
