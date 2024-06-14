import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const average = (good - bad) / all
    const positive = good / all * 100

    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />
            <h2>statistics</h2>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {all}</div>
            <div>average {average}</div>
            <div>positive {positive} %</div>
        </div>
    )
}

export default App