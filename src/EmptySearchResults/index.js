import React from 'react';

function EmptySearchResults({ searchValue: search }) {
	return (
		<div className="empty-search-results">
			<p>No hay resultados para {search} </p>
		</div>
	);
}

export { EmptySearchResults };
