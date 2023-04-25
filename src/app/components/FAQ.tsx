import React, { useEffect, useState } from 'react';
import './FAQ.css';
import CustomAccordion from './CustomAccordion';
import FaqsDataService from '../services/faq.service';
import { FAQ_TITLE } from '../variables';

const FAQ:React.FC = () :JSX.Element=> {
  const [faqs, setFaqs] = useState([]);

  useEffect(()=>{
      if(faqs.length === 0) {
        FaqsDataService.getAll().then((res) => {
          setFaqs(res.data);
          }).catch((err)=>{
              console.log(err);
          });
      }
  },[faqs]);

  return (
    <div className="FAQ">
        <div className="FAQ_title">{FAQ_TITLE}</div>
        <div className="FAQ_body">
          <CustomAccordion faqList={faqs}/>
        </div>
    </div>
  );
}

export default FAQ;