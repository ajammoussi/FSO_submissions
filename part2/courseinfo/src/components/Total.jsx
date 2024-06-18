const Total = ({ parts }) => {
    return (
        <strong>
            total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
        </strong>
    )
}

export default Total
