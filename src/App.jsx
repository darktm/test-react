import { useState } from "react";

import "./App.css";
import { Modal } from "./components/Modal";

function App() {
  const [modalActive, setModalActive] = useState(true);
  const [text, setText] = useState("");

  // setModalActive(true);
  console.log(modalActive);

  const change = (e) => setText(e.target.value);

  return (
    <div className="App">
      <button onClick={() => setModalActive(true)}>
        Показать модальное окно
      </button>
      <Modal
        title="Window!"
        modal={modalActive}
        setModal={setModalActive}
        textValue={text}
        setTextValue={setText}
        changeText={change}
      />
    </div>
  );
}

export default App;
