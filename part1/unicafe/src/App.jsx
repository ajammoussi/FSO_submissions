import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = ({ text, value }) => {
    if (text === 'positive') {
        return (
            <div>{text} {value} %</div>
        )
    }

    return (
        <div>{text} {value}</div>
    )

}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad

    const average = (good - bad) / all
    const positive = good / all * 100

    return (
        <div>
            <h2>statistics</h2>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
        </div>
    )

}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

export default App