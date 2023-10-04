import React, { useState } from "react";
import QRCode from "react-qr-code";
import Navbar from "./Navbar";

import "./Qr.css";

function QrCodeCreate() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    setValue(text);
  }

  return (
    <>
      <Navbar />
      <form className="createQrCode">
        <p>
          <label for="w3review">Enter Your Text for Creating QR Code:</label>
        </p>
        <textarea
          onChange={handleTextChange}
          name="qrCodeText"
          rows="6"
          cols="50"
        ></textarea>
        <br />
        <button onClick={handleCreate} type="button"> Generate</button>
      </form>
      <div
        style={{
          height: 300,
          margin: "0 auto",
          width: 250,
          marginTop: 50,
        }}
      >
        {value && <QRCode size={256} value={value} />}
      </div>
    </>
  );
}

export default QrCodeCreate;
