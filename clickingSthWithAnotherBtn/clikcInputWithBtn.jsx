import React, { useRef } from "react";

function App() {
  const inputWindow = React.useRef();
  function openInput() {
    inputWindow.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={inputWindow}
        />
        <button onClick={openInput}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
