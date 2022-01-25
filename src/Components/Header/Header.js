import React from 'react';
import background from '../../image/bck.jpg';
const Header = () => {
    return (
        <div>
            <div>
                <img src={background} alt="" style={{height:'800px',width:'100%'}}/>
            </div>
        </div>
    );
};

export default Header;