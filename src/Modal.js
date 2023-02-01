import React from "react";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Enter the required details </div>
    <div className="content1">
      {" "}
      <form>
        <h2>
        These Election results are declared: </h2>
         {/* <input type="text" placeholder='Enter the Election code' /> 
         <button> submit </button> */}
         <h3>

         None 
         </h3>
      </form>
    </div>
  </div>
);