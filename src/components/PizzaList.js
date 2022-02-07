import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaArray, handleEdit}) {

  function handleEditClick(id, topping, size, vegetarian){
    const editedPizza={
      id, topping, size, vegetarian
    }
    handleEdit(editedPizza)
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaArray.map((pizza) => (
          <Pizza key={pizza.id} {...pizza} handleEditClick={handleEditClick}/>
        ))}
      </tbody>
    </table>
  );
}

export default PizzaList;
