import { Tag, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  addSelectedTags,
  deleteTag,
  cancelSelectedTags,
} from "../redux/inputSlice";

function TagsBlock(): JSX.Element {
  const notes = useAppSelector((state) => state.notes.notes);
  const tags = useAppSelector((state) => state.input.tags);
  const selectedTags = useAppSelector((state) => state.input.selectedTags);
  const dispatch = useAppDispatch();

  const handleSelectTag = (tag: string): void => {
    dispatch(addSelectedTags(tag));
  };

  const handleCancelTag = (): void => {
    dispatch(cancelSelectedTags());
  };

  const handleClose = (tag: string): void => {
    dispatch(deleteTag(tag));
  };

  return (
    <div className="tags-block">
      <div className="tags">
        {tags.map((tag) => (
          <Tag
            key={tag}
            color={selectedTags.includes(tag) ? "red" : "cyan"}
            onClick={() => handleSelectTag(tag)}
            closable
            onClose={() => handleClose(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>
      <Button className="button-cancel" onClick={handleCancelTag}>
        Сancel filter
      </Button>
    </div>
  );
}

export default TagsBlock;
