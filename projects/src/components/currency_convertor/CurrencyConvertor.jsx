import React, { useRef, useState } from 'react'
import useCurrencyConversion from '../../hooks/useCurrencyConversion'

const CurrencyConverter = () => {
	const {countries, convertCurrency} = useCurrencyConversion();
	const from = useRef();
	const to = useRef();
	const amount = useRef();
	const [converted, setConverted] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	const onConvert = async () => {
		const amountToBeConvert = amount.current.value;
		if(!amountToBeConvert) {
			setErrorMessage("Amount is required");
			return;
		}
		else if(amountToBeConvert < 0) {
			setErrorMessage("Amount should be positive");
			return;
		}
		const fromCountry = from.current.value;
		const toCountry = to.current.value;

		const convertedAmount = await convertCurrency(amountToBeConvert, fromCountry, toCountry);

		setConverted(convertedAmount);
		setErrorMessage("");
	}

	const onSwap = () => {
		const fromCountry = from.current.value;
		const toCountry = to.current.value;

		from.current.value = toCountry;
		to.current.value = fromCountry;
	}

	return (
		<main className='container'>
			<div className='box'>
				<h2 className='heading'>Currency Converter</h2>
				<input ref={amount} className='card' type="number" name="amount" id="amount" placeholder='Enter an amount'/>
				{errorMessage && (
					<p className='text-red-600'>{errorMessage}</p>
				)}
				<div className='flex gap-4 justify-center items-center'>
					<select ref={from} className='card font-semibold' name="fromCountry" id="fromCountry">
						{countries.map((c, ind) => (
							<option value={c} key={ind}>{c}</option>
						))}
					</select>
					<button onClick={() => onSwap()} className='cursor-pointer text-2xl'>💱</button>
					<select ref={to} className='card font-semibold' name="toCountry" id="toCountry">
						{countries.map((c, ind) => (
							<option value={c} key={ind}>{c}</option>
						))}
					</select>
				</div>
				<button onClick={() => onConvert()} className='btn bg-blue-400 border-blue-900'>Convert</button>
				<p className='card text-center font-bold'>{converted ? converted : "Convert to see result"}</p>
			</div>
		</main>
	)
}

export default CurrencyConverter