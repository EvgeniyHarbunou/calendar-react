import React from "react";
import Layout from "../layout";
import Calendar from "../calendar";
import HeaderCalendar from '../headerCalendar';
import "./App.scss";

function App() {
  return (
    <Layout>
      <HeaderCalendar />
      <Calendar />
    </Layout>
  );
}

export default App;
