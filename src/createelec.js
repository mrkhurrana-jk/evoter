import React from "react";

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Enter the required details </div>
    <div className="content">
      You are eligible to vote in:

       
      <form>
      Parliament Election:
         {/* <input type="text" placeholder='Enter the Election code' />  */}
         <button className="entertovote"> Vote </button>
      </form>
    </div>
  </div>
);