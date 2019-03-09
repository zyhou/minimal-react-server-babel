import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTitle = async () => {
      const result = await fetch("http://localhost:3000/title");
      if (result.ok) {
        const data = await result.json();
        setTitle(data.title);
      }
    };

    fetchTitle();
  }, []);

  return <h1>{title}</h1>;
};

ReactDOM.render(<App />, document.getElementById("app"));
