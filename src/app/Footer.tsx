import React from 'react';
import './Footer.css';
import {FOOTER_COPYRIGHT, FOOTER_DESC, FOOTER_TITLE} from './variables';

const Footer: React.FC = () => {
  return (
    <div className="footer_content"> 
      <span className="footer_logo">
            <p>{FOOTER_TITLE}</p>
      </span>
      <span className="cd-paragraph-clean home-elem-92">
            <p>{FOOTER_DESC}</p>
      </span>
      <span className="cd-paragraph-clean home-elem-91">
            <p>{FOOTER_COPYRIGHT}</p>
      </span>
    </div>
  );
}

export default Footer;