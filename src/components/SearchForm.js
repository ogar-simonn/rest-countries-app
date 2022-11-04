import React, {useState, useEffect} from "react";
import {AiOutlineSearch} from "react-icons/ai";
import {useContextGlobal} from "../context/AppContext"
const SearchBar = () => {
 const {searchTerm, setSearchTerm} = useContextGlobal();
	return (
		<div className="search-bar">
		<AiOutlineSearch className="search-icon"/>
			<form onSubmit={(e) => e.preventDefault()}>
			<input type="text" value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)} placeholder="search for a country..." className="form-input"/>
			</form>
		</div>
	)
}
export default SearchBar;