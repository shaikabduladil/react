// //creating single element
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "myHeading",
//   },
//   "this is Adil"
// );
// console.log(heading); //heading is an object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //render method reponsible for rendering heading object into html

//creating multiple elements
//for creating multiple elements or siblings we need to use 3rd parameter as array of elements
import React from "react";
import ReactDOM from 'react-dom/client'
// const parent = [
//   React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "this is H1"),
//       React.createElement("h2", {}, "this is h2"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "this is H1"),
//         React.createElement("h2", {}, "this is h2"),
//       ]),
//   ]),
// ];

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const Heading=()=>{
  return (
    <h1>Hello this is Functional based Component.</h1>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);