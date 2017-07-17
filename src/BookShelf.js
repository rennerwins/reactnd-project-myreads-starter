import React from 'react'
import BooksGrid from './BooksGrid'

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

export default BookShelf
