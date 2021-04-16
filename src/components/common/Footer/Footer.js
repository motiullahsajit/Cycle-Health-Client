import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
    const quickContact = [
        { title: 'Cell: +62 821 2345 6789', link: "/" },
        { title: "Tel: +62 829 2665 4321", link: "/" },
        { title: "Email: name@domain.com", link: "/" },
        { title: "Address: CANGGU - BALI 14045 BERAWA STREET 99X BADUNG", link: "/" }
    ]
    const company = [
        { title: "Career", link: "/" },
        { title: "Terms", link: "/" },
        { title: "Policy", link: "/" },
        { title: "Legal", link: "/" },
        { title: "Credits", link: "/" }

    ]
    const quickLink = [
        { title: "Help", link: "/" },
        { title: "Starter", link: "/" },
        { title: "Tools", link: "/" },
        { title: "Asset", link: "/" },
        { title: "Library", link: "/" }
    ]
    const more = [
        { title: "Repair", link: "/" },
        { title: "Media", link: "/" },
        { title: "Adjustment", link: "/" },
        { title: "Accessories", link: "/" },
        { title: "Merchandise", link: "/" }
    ]
    return (
        <footer className="footer-area clear-both text-light pb-2">
            <div className="container mt-3 pt-5">
                <div className="row py-3">
                    <FooterCol key={1} menuTitle="QUICK CONTACT" menuItems={quickContact} />
                    <FooterCol key={2} menuTitle="COMPANY" menuItems={company} />
                    <FooterCol key={3} menuTitle="QUICK LINK" menuItems={quickLink} />
                    <FooterCol key={4} menuTitle="MORE" menuItems={more} />
                </div>
                <div className="col text-light text-center">
                    <h2 className='text-brand my-4'>SUBSCRIBE NEWSLETTER</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</h5>
                    <div className="my-5 d-flex justify-content-center align-items-center">
                        <input type="text" className='w-50 p-2' />
                        <button className="btn btn-brand-filled px-3 p-2 rounded-0">SUBMIT</button>
                    </div>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;












