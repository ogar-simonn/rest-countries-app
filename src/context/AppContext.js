import React, {useState, useEffect, useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("")
	const searchUrl = "https://restcountries.com/v3.1/name/";
	const url = "https://restcountries.com/v3.1/all"
	
	const fetchSearch = async (term) => {
		setLoading(true)
		await fetch(`${searchUrl}${term}`).then((res) => res.json()).then(data => {
		if(data) {
			setData(data);
			setLoading(false)
		} else {
			console.log("sorry, couldn't find the country " + searchTerm)
		}
		})
}
	useEffect(() => {
		if(searchTerm) {
			fetchSearch(searchTerm);
		}
	}, [searchTerm])
const fetchData = async () => {
	await fetch(url).then(res => res.json()).then((result) => { 
  setData(result);
  setLoading(false)
	})
}
	const filterByRegion = (selectedRegion) => {
		const newData = data.filter(country => {
			return country.region === selectedRegion;
		});
		setData(newData);
	}
	return <AppContext.Provider value={{fetchData, data, searchTerm, setSearchTerm, loading, filterByRegion}}>{children}</AppContext.Provider>
}

export const useContextGlobal = () => {
	return useContext(AppContext)
}
export default AppProvider;