import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content.jsx'
import Filter from './components/Filter.jsx'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [foundCountries, setFoundCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log('countries fetched')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (!filter) {
      setFoundCountries([]);
    } else {
      const filteredCountries = countries.filter(c => 
      c.name.common.toLowerCase().includes(filter.toLowerCase()));
    setFoundCountries(filteredCountries)
    }
  }, [filter, countries])

  const handleChangeCountry = (event) => {
  setFilter(event.target.value)
}

  const handleShowCountry = (countryName) => {
    const selectedCountry = countries.filter(c => c.name.common === countryName);
    setFoundCountries(selectedCountry);
  }

  console.log("here are the countries", countries)

  console.log(foundCountries)

  return (
    <>
      <div>
        <Filter value={filter} onChange={handleChangeCountry} />
        <Content countries={foundCountries} setCountries={setCountries} handleShowCountry={handleShowCountry} />
      </div>
    </>
  )
}

export default App
