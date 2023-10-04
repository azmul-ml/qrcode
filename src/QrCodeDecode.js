import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Navbar from "./Navbar";

import "./Qr.css";

function QrCodeDecode() {
  const [data, setData] = useState("No result");

  return (
    <div className="decodeSection">
      <Navbar />
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="qrReader"
      />
      <h3>Decode Result:</h3>
      <p>{data}</p>
    </div>
  );
}

export default QrCodeDecode;
