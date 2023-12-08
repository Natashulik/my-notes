import React from "react";
import MyInput from "./components/MyInput";
import Header from "./components/Header";
import Notes from "./components/Notes";
import TagsBlock from "./components/TagsBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <MyInput />
      <TagsBlock />
      <Notes />
    </div>
  );
}

export default App;
