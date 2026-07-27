import React, { useEffect, useState } from 'react'

const API_URL = "https://v6.exchangerate-api.com/v6/59ef4e887304aa84c594209c"

const useCurrencyConversion = () => {
	const [countries, setCountries] = useState(["---"]);
	const getCountries = async () => {
		try {
			const res = await fetch(`${API_URL}/latest/USD`);
			const body = await res.json();
			const fetchedCountries = Object.keys(body.conversion_rates);
			fetchedCountries.sort();
			setCountries(fetchedCountries);
		} catch (error) {
			console.log("Error Fetching Countries :: ", error);
		}
	}

	useEffect(() => {
	  getCountries();
	}, [])

	const convertCurrency = async (amount, from, to) => {
		try {
			const res = await fetch(`${API_URL}/pair/${from}/${to}/${amount}`);
			const body = await res.json();
			
			return body.conversion_result;
		} catch (error) {
			console.log("Error converting currency :: ", error);
			return null;
		}
	}
	
	return {
		countries,
		convertCurrency
	}
}

export default useCurrencyConversion