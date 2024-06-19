import { useState, useEffect } from 'react'
import personService from './services/persons'
import Form from './components/Form'
import Filter from './components/Filter'
import Content from './components/Content'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    const person = persons.find(person => person.name === newName)

    if (!person) {
      personService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(
            `Added ${returnedPerson.name}`
          )
          setTimeout(() => {
              setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
            alert(error.response.data.error)
        })
    } else if (person.name === newName) {
      updatePerson(person)
    }
  }

  const updatePerson = (person) => {
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
      person = { ...person, number: newNumber }
      personService
        .update(person.id, person)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          setSuccessMessage(
            `Updated ${returnedPerson.name}`
          )
          setTimeout(() => {
              setSuccessMessage(null)
          }, 5000)
        })

    }
  }

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(
          console.log('deleting error')
        )
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>
      <Form onSubmit={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} updatePerson={updatePerson}/>

      <h2>Numbers</h2>
      <Content persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
    
    </>
  )
}

export default App
