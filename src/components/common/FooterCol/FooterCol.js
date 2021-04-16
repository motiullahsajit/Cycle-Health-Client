import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = ({menuTitle,menuItems}) => {
    return (
        <div className="col-md-3">
            <h5 className="text-brand">{menuTitle}</h5>
            <ul className="list-unstyled mt-4">
                {
                    menuItems.map((item, index) => <li key={index}><Link to={item.link}>{item.title}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default FooterCol;