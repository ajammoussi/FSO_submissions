import Part from './Part'

const Content = ({ parts }) => {
    if (parts.length === 0)
        return <p>There are no parts for this course.</p>

    return (
        <>
            {
                parts.map(part => 
                    <Part key={part.id} part={part} />
                )
            }
        </>
    )
}
export default Content
