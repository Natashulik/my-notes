import { Tag } from "antd";
import { useAppDispatch, useAppSelector } from "../hook";

function TagsBlock(): JSX.Element {
  const tags = useAppSelector((state) => state.input.tags);

  return (
    <div className="tags-block">
      {tags.map((tag) => (
        <Tag key={tag.id} color="cyan">
          {tag.title}
        </Tag>
      ))}
    </div>
  );
}

export default TagsBlock;
