import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { HOME_SECTION_01_BTN, HOME_SECTION_01_DESC,HOME_SECTION_01_TITLE,HOME_SECTION_02_BANNER,HOME_SECTION_02_BTN,HOME_SECTION_02_CARD_01_DESC,HOME_SECTION_02_CARD_01_TITLE,HOME_SECTION_02_CARD_02_DESC,HOME_SECTION_02_CARD_02_TITLE,HOME_SECTION_02_CARD_03_DESC,HOME_SECTION_02_CARD_03_TITLE,HOME_SECTION_02_DESC, HOME_SECTION_02_TITLE, HOME_SECTION_03_CARD_01_DESC, HOME_SECTION_03_CARD_01_NUM, HOME_SECTION_03_CARD_01_TITLE, HOME_SECTION_03_CARD_02_DESC, HOME_SECTION_03_CARD_02_NUM, HOME_SECTION_03_CARD_02_TITLE, HOME_SECTION_03_CARD_03_DESC, HOME_SECTION_03_CARD_03_NUM, HOME_SECTION_03_CARD_03_TITLE, HOME_SECTION_03_TITLE, HOME_SECTION_04_DESC, HOME_SECTION_04_TITLE, HOME_SECTION_05_BTN, HOME_SECTION_05_DESC, HOME_SECTION_05_TITLE } from '../variables';
import ToastMessage from '../components/ToastMessage';
import './Home.css';

const Home:React.FC = ():JSX.Element => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [show, setShow] = useState(false);
  const sendEmail = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); 

    var data = {
      service_id: 'service_b4z3ks8',
      template_id: 'template_ogwph0n',
      user_id: 'cq2pSGSq1sUOza8gT',
      template_params: {
          'reply_to': userEmail,
      }
  }
    emailjs.send(data.service_id,data.template_id, data.template_params, data.user_id)
      .then(() => {
          setShow(true);
          setUserEmail('');
      });
  };

  return (
    <div className='home'>
      <div className="home-section-01">
          <div className="home-elem-13">
              <div className="home-elem-14"> 
                <span className="home-elem-15">
                  <p>{HOME_SECTION_01_TITLE}</p>
                </span>
                <span className="home-elem-16">
                  <p>{HOME_SECTION_01_DESC} </p>
                </span>
                <button className="home-elem-17"><a href="/courses">{HOME_SECTION_01_BTN}</a></button>
              </div>
              <div className="home-elem-18"> 
                <span className="home-elem-19"> <img src="https://res.cloudinary.com/storylens/image/upload/v1681263120/pyard7rj8d9b0vn31zxs.jpg" alt='home_section_01'/> </span>
              </div>
          </div>
      </div>
      <div className="home-section-02">
        <div className="home-elem-21"> 
          <div className="home-elem-30">
            <div className="home-elem-31"> 
              <span className="home-elem-32">
                <p>{HOME_SECTION_02_BANNER}</p>
              </span>
              <span className="home-elem-33">
                <p>{HOME_SECTION_02_TITLE}</p>
              </span>
              <button className="home-elem-34"><a href="/contact">{HOME_SECTION_02_BTN}</a></button>
            </div>
            <div className="home-elem-35"> 
              <span className="home-elem-36">
                <p>{HOME_SECTION_02_DESC}</p>
              </span>
            </div>
          </div>
          <div className="home-elem-37">
            <div className="home-elem-38"> 
              <span className="home-elem-39">
                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vectorsvg_1679042626_24645.svg" alt='home section 02 01' /> 
              </span>
              <span className="home-elem-40">
                <p>{HOME_SECTION_02_CARD_01_TITLE}</p>
              </span>
              <span className="home-elem-41">
                <p>{HOME_SECTION_02_CARD_01_DESC}</p>
              </span>
            </div>
            <div className="home-elem-42"> 
              <span className="home-elem-43"> 
                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vector-1svg_1679042626_72896.svg" alt='home section 02 02' /> 
              </span>
              <span className="home-elem-44">
                <p>{HOME_SECTION_02_CARD_02_TITLE}</p>
              </span>
              <span className="home-elem-45">
                <p>{HOME_SECTION_02_CARD_02_DESC}</p>
              </span>
            </div>
            <div className="home-elem-46"> 
              <span className="home-elem-47"> 
                <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/framesvg_1679042626_29925.svg" alt='home section 02 03' /> 
              </span>
              <span className="home-elem-48">
                <p>{HOME_SECTION_02_CARD_03_TITLE}</p>
              </span>
              <span className="home-elem-49">
                <p>{HOME_SECTION_02_CARD_03_DESC}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-03">
        <div className="home-elem-51"> 
          <span className="home-elem-52">
            <p>{HOME_SECTION_03_TITLE}</p>
          </span>
          <div className="home-elem-53">
            <div className="home-elem-54"> 
              <span className="home-elem-55">
                <p>{HOME_SECTION_03_CARD_01_NUM}</p>
              </span>
              <span className="home-elem-56">
                <p>{HOME_SECTION_03_CARD_01_TITLE}</p>
              </span>
              <span className="home-elem-57">
                <p>{HOME_SECTION_03_CARD_01_DESC}</p>
              </span>
            </div>
            <div className="home-elem-58"> 
              <span className="home-elem-59">
                <p>{HOME_SECTION_03_CARD_02_NUM}</p>
              </span>
              <span className="home-elem-60">
                <p>{HOME_SECTION_03_CARD_02_TITLE}</p>
              </span>
              <span className="home-elem-61">
                <p>{HOME_SECTION_03_CARD_02_DESC}</p>
              </span>
            </div>
            <div className="home-elem-62"> 
              <span className="home-elem-63">
                <p>{HOME_SECTION_03_CARD_03_NUM}</p>
              </span>
              <span className="home-elem-64">
                <p>{HOME_SECTION_03_CARD_03_TITLE}</p>
              </span>
              <span className="home-elem-65">
                 <p>{HOME_SECTION_03_CARD_03_DESC}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-04"> 
        <span className="home-elem-67">
          <p>{HOME_SECTION_04_TITLE} </p>
        </span>
        <div className="home-elem-68">
          <div className="home-elem-69">
            <div className="home-elem-70"> 
              <span className="home-elem-72"> <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1660825024/static/framestarsvg_1660825024_88718.svg" alt='home section 04 01' /> </span>
              <span className="home-elem-73"> <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1660825024/static/framestarsvg_1660825024_88718.svg" alt='home section 04 02' /> </span>
              <span className="home-elem-74"> <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1660825024/static/framestarsvg_1660825024_88718.svg" alt='home section 04 03' /> </span>
              <span className="home-elem-75"> <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1660825024/static/framestarsvg_1660825024_88718.svg" alt='home section 04 04' /> </span>
              <span className="home-elem-76"> <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1660825024/static/framestar-1svg_1660825024_51817.svg" alt='home section 04 05' /> </span>
            </div>
            <span className="cd-paragraph-clean home-elem-71 home-elem-71">
              <p>{HOME_SECTION_04_DESC}</p>
            </span>
            <div className="home-elem-77">
              <div className="home-elem-78"> </div>
              <div className="home-elem-79"> 
                <span className="cd-paragraph-clean home-elem-80">
                  <p>Dianne Min</p>
                </span>
                <span className="cd-paragraph-clean home-elem-81">
                  <p>Sun Life</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-05">
        <div className="home-elem-83">
          <div className="home-elem-84"> 
            <span className="home-elem-85">
              <p>{HOME_SECTION_05_TITLE} </p>
            </span>
            <span className="home-elem-86">
              <p>{HOME_SECTION_05_DESC}</p>
            </span>
            <div className="home-elem-87"> 
              <input type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Enter your email address" className="home-elem-88" value={userEmail} onChange={e => setUserEmail(e.target.value)} required/>
              <button className="home-elem-89" onClick={e => sendEmail(e)}><p>{HOME_SECTION_05_BTN}</p></button>
            </div>
            {show && (
              <ToastMessage title={'Success Subscription!'} desc={'We will review message and contact you soon.'} setShow={setShow} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;