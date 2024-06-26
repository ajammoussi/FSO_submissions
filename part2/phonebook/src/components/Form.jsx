const Form = ({ onSubmit, newName, newNumber, handleNameChange, handleNumberChange, updatePerson }) => {
    return (
        <form onSubmit={onSubmit}>
        <div>
            name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    )
}

export default Form
