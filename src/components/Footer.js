import React from 'react';
import { config } from '../config/config';
import { Link } from '@ui5/webcomponents-react';



const Footer = () => {
    return (
        <div className="sticky-footer " style={{height:"10vh"}}>
        <Link href="https://newstarinfotech.com" target='_blank'>{config.footertext}</Link>
      </div>
    );
}



export default Footer;