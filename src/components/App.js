import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzaArray, setPizzaArray] = useState([]);
  const [edited, setEdited]=useState(false)
  const [pizzaObj, setPizzaObj]=useState({
    topping: '',
    size: '',
    vegetarian: false
  })

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((pizzaData) => setPizzaArray(pizzaData));
  }, []);

  function handleEdit(editedPizza){
    setPizzaObj({
      topping: editedPizza.topping,
      size: editedPizza.size,
      vegetarian: editedPizza.vegetarian 
    })
    setEdited(true)
  }

  function onHandleSubmit(data){
    setPizzaArray(pizzaArray=>[...pizzaArray, data])
  }
  

  return (
    <>
      <Header />
      <PizzaForm
      onHandleSubmit={onHandleSubmit} 
      edited={edited}
      pizzaObj={pizzaObj}
      />
      <PizzaList
      pizzaArray={pizzaArray} 
      handleEdit={handleEdit}/>
    </>
  );
}

export default App;

// After firing up your server, render the list of pizzas in to the table.

// Each row in the table should be a pizza component and when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form.

// The pizza form will then render the information about the pizza in the form, which will be editable.

// When the form is submitted, the information should be reflected in your table and persist in the backend.
