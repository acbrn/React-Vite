// Desc: Footer component   

import './footer.css' 

const Footer = () => {
    return (
    <div className='footer-section__padding'>
        <div className='footer-heading'>
            <h6>Thank You! Please reach out if you are looking for a software developer</h6>
        </div>
        <div className='footer-btn'>
            <a href='https://github.com/acbrn'>  GitHub </a>
        </div>
        <div className='footer-social'>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Links</h4>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
        </div>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
        </div>
        <div className='footer-links_div'>
            <h4 className='footer-link-title'>Reach Out</h4>
                <p>Mailing</p>
                <p>Phone</p>
                <p>Email</p>
        </div>
        </div>
        <div className='footer-copyright'>
        <p>© 2024 ProjectAMC. All rights reserved.</p>
        </div>
    </div>
    );
}

export default Footer;