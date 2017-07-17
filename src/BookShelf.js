import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

const BookShelf = props => {
  const { shelfTitle, shelf } = props
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfTitle}</h2>
			<div className="bookshelf-books">
				<BooksGrid books={shelf} />
			</div>
		</div>
	)
}

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  shelf: PropTypes.array
}

export default BookShelf
