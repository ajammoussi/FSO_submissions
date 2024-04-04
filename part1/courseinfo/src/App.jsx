const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return <p>{props.name} {props.exercises}</p>;
};

const Content = ({parts}) => {
    return (
        <div>
            <Part {...parts[0]} />
            <Part {...parts[1]} />
            <Part {...parts[2]} />
        </div>
    )
};

const Footer = ({parts}) => {
    return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>;
};

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        // 'react/prop-types': 0,
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Footer parts={course.parts} />
        </div>
    )
}

export default App