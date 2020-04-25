import React from "react";
import Layout from "../layout";
import MonthCalendar from "../monthCalendar";
import HeaderCalendar from '../headerCalendar';
import "./App.scss";

function App() {
  return (
    <Layout>
      <HeaderCalendar />
      <MonthCalendar />
    </Layout>
  );
}

export default App;
