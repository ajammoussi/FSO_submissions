import Person from "./Person"

const Content = ({ persons, newFilter }) => {
    return (
        <div>
            {persons.map(person =>
            <Person key={person.name} person={person} />
            ).filter(person => 
            person.props.person.name.toLowerCase().includes(newFilter.toLowerCase())
            )}
        </div>
    )
}

export default Content
