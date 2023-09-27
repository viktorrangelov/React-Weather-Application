import React from "react";
import Header from "./components/Header/Header";
import AllCitiesWeather from "./components/AllCitiesWeather/AllCitiesWeather";

function App() {
  return (
    <>
      <Header />
      <main>
        <AllCitiesWeather />
      </main>
    </>
  );
}

export default App;
