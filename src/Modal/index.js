import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, onTop }) {
  return ReactDOM.createPortal(
    <div 
			className={`ModalBackground ${ onTop ? 'ModalBackground--allDisplay' : ''}`}
		>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
