
import  profilePicture  from './assets/projectAMC.png';

function Card() {
    return (
        <div className="card">
            <img src={profilePicture} alt="profile-picture" className='card-image' />
            <h2 className='title-class'>Andrew Coburn</h2>
            <p className='card-text'>
                        🤝 Let&apos;s Connect for Collaboration!
                        I am actively seeking opportunities to collaborate, learn, and contribute. If you&apos;re looking for a dedicated and resourceful team player with a strong foundation in software engineering, let&apos;s connect! Excited about utilizing my unique background and skills to make a positive impact in the tech world.
            </p>
        </div>
    )
}

export default Card;