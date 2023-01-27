import React from "react";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Enter the required details </div>
    <div className="content">
      {" "}
      <form>
         <input type="text" placeholder='Enter the Election code' /> 
         <button> submit </button>
      </form>
    </div>
  </div>
);