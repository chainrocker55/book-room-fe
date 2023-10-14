import { Layout } from "antd";
const { Header } = Layout;
import { Button } from "antd";
const HeaderBar = () => {
  return (
    <Header
    style={{
      position: "sticky",
      color: "whitesmoke",
      top: 0,
      zIndex: 1,
      width: "100%",
      display: "flex",
      alignItems: "center"
    }}
  >
    <h1 style={{ marginRight: "auto" }}>Book Room</h1>
    <Button style={{ marginLeft: "auto", color: "whitesmoke", fontWeight: 800, fontSize: "1rem" }} type="text">
      Singin
    </Button>
  </Header>
  );
};
export default HeaderBar;
