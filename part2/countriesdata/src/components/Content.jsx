const Content = ({ countries }) => {
    if (countries.length === 1) {
        const country = countries[0];
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
        );
    }
    if (2 <= countries.length <= 10) {
        return (
            <ul>
                {countries.map((country) => (
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ul>
        );
    }
    return <p>too many matches</p>;
}
    
export default Content;
