import { useState } from 'react'

const Header = ({ text }) => (
    <h2>{text}</h2>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Anecdote = ({ anecdote, votes }) => (
    <div>
        {anecdote} <br/>
        has {votes} votes
    </div>
)

const MostVotedAnecdote = ({ anecdotes, votes }) => {
    const mostVotes = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(mostVotes)

    if (mostVotes === 0) {
        return (
            <p>No votes yet</p>
        )
    }

    return (
        <Anecdote
            anecdote={anecdotes[mostVotedIndex]}
            votes={mostVotes}
        />
    )

}


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const handleNextAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const voteAnecdote = () => {
        setVotes(prevVotes => {
            const copy = [...prevVotes]
            copy[selected] += 1
            return copy
        })
    }

    return (
        <div>
            <Header text={"Anecdote of the day"} />
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
            <Button handleClick={handleNextAnecdote} text="next anecdote" />
            <Button handleClick={voteAnecdote} text="vote" />
            <Header text={"Anecdote with most votes"} />
            <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

export default App
