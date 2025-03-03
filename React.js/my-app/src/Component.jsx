import React from "react";
import { hydrateRoot } from "react-dom/client";

function Component() {
    return(
        <>
    <h1>Component</h1>
    <Fruite/>
    </>
    )
}


const Fruite = () => {
  return (
    <div>
      <h2>fruites are most importent for health</h2>
    </div>
  )
}



export default Component