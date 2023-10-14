import "./App.css";
import CalendarTable from "./components/CalendarTable";
import HeaderBar from "./components/HeaderBar";
import { Layout } from "antd";
const { Content, Footer } = Layout;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBEPLPG8uJNxd4QEQ1dlQtmnZNMlkhdqhU",
//   authDomain: "book-room-26755.firebaseapp.com",
//   projectId: "book-room-26755",
//   storageBucket: "book-room-26755.appspot.com",
//   messagingSenderId: "432985967501",
//   appId: "1:432985967501:web:94154a470a6d7db92a0bc4",
//   measurementId: "G-D6W14YHC7E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

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
