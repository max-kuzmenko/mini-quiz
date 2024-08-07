import React from 'react';
import Checkbox from "components/checkbox";
import Summary from "./components/summary";
import Text from "./components/text";

function App() {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <div className="app">
        <Summary items={[{ title: "What is your name?", text: "Neo." }, { title: "Choose the pill", text: "The red one." }]} />
        <div className="row">
            <Text variant="regular">Ready:</Text><Checkbox isChecked={isReady} onChange={(val) => setIsReady(val)} />
        </div>
    </div>
  );
}

export default App;
