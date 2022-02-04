import './App.css';
import {useEffect, useState} from "react";
import Information from "./components/Information";

function App() {
    const [input, setInput] = useState('')
    const [condition, setCondition] = useState('')
    const [temperature, setTemperature] = useState('')
    const [country, setCountry] = useState('Ukraine')

    useEffect(() => {
        console.log(country)
        fetch(`http://api.weatherapi.com/v1/current.json?key=703bff0840c34be9af7133633222801&q=Ukraine&aqi=no`)
            .then(response => response.json())
            .then( response => {
                setTemperature(response.current.temp_c)
                setCondition(response.current.condition.text)
                console.log(response)
            })
    }, [])

    const search = e => {
        if (e.key === "Enter") {
            setCountry(input)
            console.log(country)
            fetch(`http://api.weatherapi.com/v1/current.json?key=703bff0840c34be9af7133633222801&q=${input}&aqi=no`)
                .then(response => response.json())
                .then( response => {
                    setTemperature(response.current.temp_c)
                    setCondition(response.current.condition.text)
                    console.log(response)
                })
        }
    }

    const inputHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

  return (
  <div className={`item ${
      condition === "Heavy snow"   ? "item--snow"
          : condition === "Sunny"  ? ""
          : condition === "Rainy"  ? "item--rain" 
          : condition === "Cloudy" ? "item--cloudy":
          ""
  }`}>
    <h1 className="country">{country}</h1>
      <input placeholder="Search" type="text" onChange={inputHandler} onKeyPress={search}/>
    <Information
        temperature={temperature}
        condition={condition}
    />
  </div>
  );
}

export default App;