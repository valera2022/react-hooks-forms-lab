import React,{useState} from "react";


function Filter({ onCategoryChange, onSearchChange, search }) {
  const [state,setState] = useState("")

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search} />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      
    </div>

  
  );

  // function handleSearch(event){
  //   setState(event.target.value)
  //   console.log(state)
  //   onSearchChange(state)
  // }

}

export default Filter;
