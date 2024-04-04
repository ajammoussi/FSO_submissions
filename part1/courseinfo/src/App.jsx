const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return <p>{props.name} {props.exercises}</p>;
};

const Content = ({part1, part2, part3}) => {
    return (
        <div>
            <Part {...part1} />
            <Part {...part2} />
            <Part {...part3} />
        </div>
    )
};

const Footer = (props) => {
    return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>;
};

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        // 'react/prop-types': 0,
        <div>
            <Header course={course} />
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
            />
            <Footer exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </div>
    )
}

export default App