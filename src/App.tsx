import React from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";


function App() {


  return (
    <div>
      <Alert>Hello World</Alert>
      <ListGroup
        items={["item1", "item2"]}
        heading={"Item List"}
        onSelectItem={function (item: String): void {
          console.log('====================================');
          console.log(item);
          console.log('====================================');
        }}

      />
    </div>
  )
}

export default App;
