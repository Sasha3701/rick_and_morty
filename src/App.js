import React, { useEffect } from "react";
import 'regenerator-runtime/runtime'

// Components
import { WidgetContainer } from "./components";

// Api
import api from "./api";

const App = () => {
  useEffect(() => {
    api.getAll().then((res) => {
      console.log(res);
    });
  }, []);

  return <WidgetContainer position="top" positionOpen="right">asdasda</WidgetContainer>
};

export default App;
