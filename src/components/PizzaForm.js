import React, { useState } from "react";
function PizzaForm({pizzaObj, edited, onHandleSubmit }) {

  const [formData, setFormData] = useState({
    topping: '',
    size: "",
    vegetarian: false,
  });


  function handleChange(e) {
    const handleName = e.target.name;
    let handleValue = e.target.value;

    setFormData({
      ...formData,
      [handleName]: handleValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {

        onHandleSubmit(data)

        setFormData({
        topping: "",
        size: "",
      })});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={edited? pizzaObj.topping : formData.topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={edited? pizzaObj.size : formData.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={edited? pizzaObj.vegetarian : formData.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={formData.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default PizzaForm;
