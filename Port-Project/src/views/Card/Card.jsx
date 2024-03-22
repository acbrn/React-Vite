// This file contains the Card component which is used to display the profile picture and a brief description of the user. 
// The Card component is a functional component that returns a JSX element.

import './card.css';

const Card = () => {
    return (
    <div className='card-container'>
        <div className="card1">
            <h2 className='card-title'> ACBRN</h2>
        <p>
            I&apos;m a web developer and designer based in Iowa City, Iowa. I specialize in creating websites and web applications that are both functional and aesthetically pleasing.
        </p>
        </div>
        <div className="card2">
            <h2 className='card-title'>Social Media</h2>
            <div className='social-media'>
            <input type='button' value="LinkedIn" className='button' />
                <a href="https://www.linkedin.com/in/andrew-coburn8"></a>
            </div>
            <div className='social-media'>
                    <input type='button' value="Facebook" className='button'  />
                    <a href="https://www.facebook.com/PhenyxShadow/"></a>
            </div>
        </div>
    </div>
    );
    }

export default Card;