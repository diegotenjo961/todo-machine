import React, { Children, cloneElement} from 'react';

function TodoHeader({ children, loading }) {
	return (
		<div className="todo-header">
			{
				Children
					.toArray(children)
					.map(child => cloneElement(child, { loading }))
			}
		</div>
	);
}

export { TodoHeader };
