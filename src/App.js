import React from "react";
import AppRoutes from "./AppRoutes";
import "./App.css";
// docker push bandeiradocker/artgallery:latest
// docker pull bandeiradocker/artgallery

const App = () => {

  return(
    <div className="App">
      <AppRoutes />
    </div>
  );

};

export default App;

