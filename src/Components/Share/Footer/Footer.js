import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;