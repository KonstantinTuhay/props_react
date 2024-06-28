import React from "react";

const App = () => {
  const number = 1,
    string = "something",
    bool = true,
    obj = { df: 2, swee: "true" }, //Objects are not valid as a React child
    func = function () {
      return "Hi";
    },
    arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <Component1 message1={number} />
      <Component2 message2={string} />
      <Component3 message3={bool} />
      <Component4 message4={obj} />
      <Component5 message5={func} />
      <Component6 message6={arr} />
    </div>
  );
};

const Component1 = ({ message1 }) => {
  return <div>{message1}</div>;
};

const Component2 = ({ message2 }) => {
  return <div>{message2}</div>;
};

const Component3 = ({ message3 }) => {
  return <div>{message3}</div>;
};

const Component4 = ({ message4 }) => {
  return <div>{JSON.stringify(message4)}</div>;
};

const Component5 = ({ message5 }) => {
  return <div>{message5()}</div>;
};

const Component6 = ({ message6 }) => {
  return <div>{message6}</div>;
};

export default App;
