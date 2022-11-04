import React, {useState} from "react";
import {useContextGlobal} from "../context/AppContext";
import { BsChevronDown } from "react-icons/bs";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const DropDownMenu = () => {
	const [isContentVisible, setIsContentVisible] = useState(false); 
	const {filterByRegion} = useContextGlobal();
	return (
		<div className="dropdown">
			<button className="dropdown-btn" onClick={() => setIsContentVisible(!isContentVisible)}>Filter by region
				<BsChevronDown className="dropdown-icon"/>
			</button>
		<div className={`dropdown-content ${isContentVisible ? "show" : ""}`}>
			{
				regions.map((region, index) => {
			return <p onClick={() => {
				filterByRegion(region)
				setIsContentVisible(false);
			}} key={index}>{region}</p>
	})
			}
		</div>
</div>
	)
}
export default DropDownMenu;