
function About() {

    const fact1 = "I am a full stack web developer";
    const fact2 = "I am a USAF veteran";

    return (
        <div>
            <h2 className="about-title">About</h2>
            <p>
                My name is Andrew Coburn and I am a web developer. I have been developing websites for over 1 year. I am proficient in HTML, CSS, JavaScript, and React. I am also skilled in backend development using Node.js and Express, as well as MongoDB. I have a passion for creating beautiful and functional websites. I am always looking for new projects to work on and new people to meet. If you have a project you would like to discuss, please feel free to contact me.
            </p>
            <ul>
                <li>Random Facts</li>
                <li>{fact1}</li>
                <li>{fact2}</li>
            </ul>
        </div>
    );
}

export default About;