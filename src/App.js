import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

const itemsApi = () =>
  new Promise((resolve, reject) => {
    // useLoadind('false')

    setTimeout(() => {
      resolve([
        { userId: 1, name: "Orange" },
        { userId: 2, name: "Banana" },
        { userId: 1, name: "Strawberry" },
        { userId: 1, name: "Apple" },
        { userId: 3, name: "Orange" },
        { userId: 2, name: "Apple" },
      ]);
    }, 2000);
  });

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([
    { userId: 1, name: "Orange" },
    { userId: 2, name: "Banana" },
    { userId: 1, name: "Strawberry" },
    { userId: 1, name: "Apple" },
    { userId: 3, name: "Orange" },
    { userId: 2, name: "Apple" },
  ]);
  const [amosMoses] = useState("Amos moses");
  const [isDataReady, setIsDataReady] = useState(false);

  // itemsApi().then((result ) => {
  //     setData(result);
  //   }
  // );

  useEffect(() => {
    setIsLoading(false);
    changeData();
  }, []);

  const changeData = () => {
    const list = data.reduce((object, current) => {
      if (object[current.userId]) {
        object[current.userId] = [...object[current.userId], current.name];
      } else {
        object[current.userId] = [current.name];
      }

      return object;
    }, {});

    setData(list);
    setIsDataReady(true);
  };
  const returnList = () => {
    console.log("data", data);

    if (data) {
      return (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div>
              <ul key={key}>
                Oi neto: {key}
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      <></>;
    }
  };

  if (isLoading) {
    return (
      <div>
        <ul>
          <li>Loading</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <div>{isDataReady && returnList()}</div>
      </div>
    );
  }
};

export default App;
