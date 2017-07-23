import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = props => {
	const { shelfTitle, shelf, change } = props

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">
				{shelfTitle}
			</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{shelf.map(data => {
						return <Book key={data.id} book={data} change={change} />
					})}
				</ol>
			</div>
		</div>
	)
}

BookShelf.propTypes = {
	shelfTitle: PropTypes.string.isRequired,
	shelf: PropTypes.array,
	change: PropTypes.func
}

export default BookShelf
