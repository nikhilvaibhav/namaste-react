/*
<div id="parent">
    <div id="child">
        <h1>I am H1 tag<h1>
        <h2> I am an H2 tag </h2>
    </div>
    <div id="child2">
        <h1>I am H1 tag<h1>
        <h2> I am an H2 tag </h2>
    </div>
</div>
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is namastey React 🚀"),React.createElement("h2", {}, "I am H2 tag")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am H1 tag"),React.createElement("h2", {}, "I am H2̀ tag")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);


// const App = () => {
//     return (
//         <div>
//             <h1>Hello, React with Parcel!</h1>
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.getElementById('root'));