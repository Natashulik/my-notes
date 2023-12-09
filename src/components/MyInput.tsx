import { Input, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hook";
import { setIsEmpty, setInputText, createTag } from "../redux/inputSlice";
import { setNewNote } from "../redux/notesSlice";

function MyInput(): JSX.Element {
  const inputText = useAppSelector((state) => state.input.inputText);
  const isEmpty = useAppSelector((state) => state.input.isEmpty);
  const tags = useAppSelector((state) => state.input.tags);

  const dispatch = useAppDispatch();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setInputText(event.target.value));
  }

  const handleClick = (): void => {
    if (inputText) {
      const newNote = { id: Date.now(), title: inputText, editMode: false };
      dispatch(setNewNote(newNote));
      dispatch(setInputText(""));
      dispatch(setIsEmpty(false));

      const words = inputText.split(" ");
      const inputTags = words.filter((word) => word.startsWith("#"));
      if (inputTags.length !== 0) {
        inputTags.forEach((item) => {
          if (!tags.includes(item)) {
            dispatch(createTag(item));
          }
        });
      }
    } else {
      dispatch(setIsEmpty(true));
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="new-note_block">
      <Input
        value={inputText}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={isEmpty ? "Add new note" : ""}
        className="new-note"
      />
      <Button className="button-add" onClick={handleClick}>
        Add
      </Button>
    </div>
  );
}

export default MyInput;
