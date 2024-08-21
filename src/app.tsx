import React from 'react';
import Checkbox from "components/checkbox";
import Text from "./components/text";

function App() {
  const [isReady, setIsReady] = React.useState(false);

  return (
    <div className="app">
        <div className="row">
            <Text variant="regular">Ready:</Text><Checkbox isChecked={isReady} onChange={(val) => setIsReady(val)} />
        </div>
    </div>
  );
}

export default App;
