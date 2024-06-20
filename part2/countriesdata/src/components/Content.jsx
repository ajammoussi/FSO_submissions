import Country from "./Country";

const Content = ({ countries, handleShowCountry}) => {

    if (countries.length === 1) {
        const country = countries[0];
        return (
            <Country country={country} />
        )
    }
    if (2 <= countries.length <= 10) {
        return (
            <ul>
                {countries.map((country, i) => (
                    <li key={i}>
                        {country.name.common}
                        <button onClick={() => {handleShowCountry(country.name.common)}}>show</button>
                    </li>
                ))}
            </ul>
        );
    }
    return <p>too many matches</p>;
}
    
export default Content;
