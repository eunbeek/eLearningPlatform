import React from 'react';
import { ABOUT_DESC_01, ABOUT_DESC_02, ABOUT_DESC_03, ABOUT_SUB_TITLE, ABOUT_TITLE } from '../variables';
import img from '../../resource/kubernete.png';
import './About.css';

const About:React.FC = ():JSX.Element => {
  return (
    <div className="about-elem-1">
        <div className="about-elem-2">
            <div className="about-elem-3"> <span className="cd-paragraph-clean about-elem-4">
                    <p>{ABOUT_TITLE}</p>
                </span><span className="about-elem-5">
                    <p>{ABOUT_SUB_TITLE}</p>
                </span><span className="about-elem-6">
                    <p>{ABOUT_DESC_01}</p>
                    <p><br/></p>
                    <p>{ABOUT_DESC_02}</p>
                    <p><br/></p>
                    <p>{ABOUT_DESC_03}</p>
                </span></div>
            <div className="about-elem-7"> <span className="about-elem-8"> <img src={img} alt='kubernete'/> </span></div>
        </div>
    </div>
  );
}

export default About;