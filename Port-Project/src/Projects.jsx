import props from 'prop-types'


function Projects(props){
    return (
        <>
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div className="project-card">
                <p>Name: {props.name}</p>
                <p>Description: {props.description}</p>
                <p>Software Used: {props.software}</p>
                <p>Link: {props.link}</p>
            </div>
        </>
    )
}

Projects.propTypes = {
    name: props.string,
    description: props.string,
    software: props.string,
    link: props.string
}

Projects.defaultProps = {
    name: "Project Name",
    description: "Project Description",
    software: "Software Used",
    link: "Link"
}

export default Projects