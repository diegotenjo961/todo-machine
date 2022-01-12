import React from 'react';
import { withStorageListener } from './withStorageListener';
import { Modal } from '../Modal';

import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
	if(show) {
		return (
			<Modal onTop>
				<div className="change-alert">
					<p>
						Tienes cambios sin guardar.
					</p>
					<button onClick={toggleShow}>
						Actualizate
					</button>
				</div>
			</Modal>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { 
	ChangeAlertWithStorageListener as ChangeAlert
};
