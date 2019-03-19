import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import downloadFileUtil from "./utils/downloadFile";

class App extends Component {
  downloadFile = async fileType => {
    const host = "localhost" || "172.16.1.250";
    const serverPort = 5000;
    const url = `http://${host}:${serverPort}/api/download/${fileType}`;
    try {
      const response = await axios.get(url);
      console.log(response);
      downloadFileUtil(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Download PDF</h1>
        <button onClick={() => this.downloadFile("pdf")}>
          Click to download PDF
        </button>
      </div>
    );
  }
}

export default App;
