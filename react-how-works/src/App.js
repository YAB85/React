import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [listTitle, setListTitle] = useState("My List!");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  /* const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
      
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true)
  } */

  const changeTitleHandler = useCallback(() => {
    setListTitle(`New Title`);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput title={listTitle} items={[5, 3, 1, 10, 9]} />
      {/*  <Button onClick={allowToggleHandler}>Allow Toggling</Button> */}
      <Button onClick={changeTitleHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
