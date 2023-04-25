import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Form, Button} from 'react-bootstrap';
import {SEND_TITLE, EMAIL_USER_NAME,EMAIL_USER_EMAIL,EMAIL_USER_MESSAGE } from '../variables';
import './EmailForm.css';
import ToastMessage from './ToastMessage';

const EmailForm:React.FC = ():JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [fromName, setFromName] = useState<string>('');
  const [replyTo, setReplyTo] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(fromName.length > 0 && replyTo.length > 0 && message.length > 0) setIsValidated(true);
    else setIsValidated(false);
  },[fromName,replyTo,message]);


  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    if(!isValidated){
      return;
    }

    var data = {
      service_id: 'service_b4z3ks8',
      template_id: 'template_cdmyzjr',
      user_id: 'cq2pSGSq1sUOza8gT',
      template_params: {
          'from_name':  event.currentTarget.from_name.value,
          'reply_to': event.currentTarget.reply_to.value,
          'message': event.currentTarget.message.value
      }
  }
    emailjs.send(data.service_id,data.template_id, data.template_params, data.user_id)
      .then((result) => {
          console.log(result.text);
          setShow(true);
          setFromName('');
          setReplyTo('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="EmailForm">
        <div className="email_form_header">{SEND_TITLE}</div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="from_name">
            <Form.Label>{EMAIL_USER_NAME}</Form.Label>
            <Form.Control type="text" placeholder="Your name" value={fromName} onChange={e => setFromName(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="reply_to">
            <Form.Label>{EMAIL_USER_EMAIL}</Form.Label>
            <Form.Control type="email" placeholder="Your email" value={replyTo} onChange={e => setReplyTo(e.target.value)} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>{EMAIL_USER_MESSAGE}</Form.Label>
            <Form.Control type='text' as="textarea" placeholder="Enter Message" value={message} onChange={e => setMessage(e.target.value)} required/>
          </Form.Group>
          <Button id='submit_btn' variant="primary" type="submit" disabled={!isValidated}>
            Send
          </Button>
        </Form>
        {show && (
          <ToastMessage title={'Email Sent!'} desc={'We will review message and contact you soon.'} setShow={setShow} />
        )}
      </div>
  );
}

export default EmailForm;