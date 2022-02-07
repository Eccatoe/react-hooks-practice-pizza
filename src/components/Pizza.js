import React from "react";

function Pizza({id, topping, size, vegetarian, handleEditClick}) {

  function handleClick(){
    handleEditClick(id, topping, size, vegetarian)
  }



  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
