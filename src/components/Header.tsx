import { Typography } from "antd";

const { Title } = Typography;

function Header(): JSX.Element {
  return (
    <Title level={2} className="header-title">
      Мои заметки
    </Title>
  );
}

export default Header;
