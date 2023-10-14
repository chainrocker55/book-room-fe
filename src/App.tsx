import "./App.css";
import CalendarTable from "./components/CalendarTable";
import HeaderBar from "./components/HeaderBar";
import { Layout } from "antd";
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <HeaderBar />
      <Content style={{ padding: "25px 25px 0 25px" }}>
        <CalendarTable />
      </Content>
      <Footer style={{ textAlign: "center" }}>Kachain Jantalat</Footer>
    </Layout>
  );
}

export default App;
