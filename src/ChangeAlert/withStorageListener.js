import React, { useState } from 'react';

function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [storageChange, setStorageChange] = useState(false);

		window.addEventListener('storage', (change) => {
			if (change.key === 'TODOS_V1') {
				setStorageChange(true);
			}
		});

		const toggleShow = () => {
			setStorageChange(false);
			props.sincronize();
		}

		return (
		  <WrappedComponent 
        show={storageChange}
			  toggleShow={toggleShow}	
			/>  
		)
	};
};

export { withStorageListener };
