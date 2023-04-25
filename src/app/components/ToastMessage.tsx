import React from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';

interface ToastMessageProps {
  title: string;
  desc: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const ToastMessage: React.FC<ToastMessageProps> = ({title, desc, setShow}: ToastMessageProps):JSX.Element=> {

  return (
    <ToastContainer position='middle-center'>
    <Toast onClose={() => setShow(false)} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{desc}</Toast.Body>
    </Toast>
  </ToastContainer>
  );
}

export default ToastMessage;