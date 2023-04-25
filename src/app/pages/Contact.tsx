import React from 'react';
import './Contact.css';
import EmailForm from '../components/EmailForm';
import FAQ from '../components/FAQ';
import { CONTACT_TITLE, CONTACT_TOP_BANNER, CONTACT_TOP_BANNER_2 } from '../variables';

const Contact:React.FC = ():JSX.Element => {

  return (
      <div className="Contact">
        <div className='Contact_top_banner'>
          <div className='Contact_top_banner_title'>{CONTACT_TITLE}</div>
          <div className='Contact_top_banner_desc'>
            {CONTACT_TOP_BANNER}<br/> {CONTACT_TOP_BANNER_2}
          </div>
        </div>
        <EmailForm />
        <FAQ />
      </div>
  );
}

export default Contact;