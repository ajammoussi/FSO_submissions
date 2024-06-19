import Person from "./Person"

const Content = ({ persons, newFilter, deletePerson }) => {
    return (
        <div>
            {persons.map(person =>
            <Person 
                key={person.name} 
                person={person} 
                deletePerson = {() => deletePerson(person.id)}
            />
            ).filter(person => 
                person.props.person.name.toLowerCase().includes(newFilter.toLowerCase())
            )}
        </div>
    )
}

export default Content
