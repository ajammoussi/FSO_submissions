const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}<br/>
            area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {/* iterate over the languages object and display the language names */}
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
                
            </ul>
            <img 
                src={country.flags.png} 
                alt={country.flags.alt} 
                width="200" 
                style={{border: "0.5px solid black"}}
            />
        </div>
    )
}

export default Country;
