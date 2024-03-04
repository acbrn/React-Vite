
function About() {

    const fact1 = "I am a full stack web developer";
    const fact2 = "I am a USAF veteran";

    return (
        <div>
            <h2 className="about-title">About</h2>
            <ul>
                <li>Random Facts</li>
                <li>{fact1}</li>
                <li>{fact2}</li>
            </ul>
        </div>
    );
}

export default About;