import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
      return item.name.toLowerCase().includes(searchInput.toLowerCase())
      
  })

 function onSearchChange(event){
      
      setSearchInput(event.target.value)
 }

 function onItemFormSubmit(newItem){
  
        
        setItems([...items, newItem])
 }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange ={onSearchChange} search ={searchInput} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
