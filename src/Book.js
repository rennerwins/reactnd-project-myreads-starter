import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
	const { book, change } = props
	return (
		<li>
			<div className="book">
				<div className="book-top">
					{book.imageLinks
						? <BookCover image={book.imageLinks.thumbnail} />
						: <BookCover />}
					<BookShelfChanger shelf={book.shelf} change={change} book={book} />
				</div>
				<BookTitle title={book.title} />
				{book.authors && <BookAuthors authors={book.authors} />}
			</div>
		</li>
	)
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	change: PropTypes.func
}

// Book's cover component
const BookCover = props => {
	const { image } = props
	return (
		<div
			className="book-cover"
			style={{
				width: 128,
				height: 193,
				backgroundImage: `url(${image})`,
				backgroundColor: 'lightGray'
			}}
		/>
	)
}

BookCover.propTypes = {
	image: PropTypes.string
}

// Book's title component
const BookTitle = props => {
	const { title } = props
	return (
		<div className="book-title">
			{title}
		</div>
	)
}

BookTitle.propTypes = {
	title: PropTypes.string.isRequired
}

// Book's authors component
const BookAuthors = props => {
	const { authors } = props
	return (
		<div className="book-authors">
			{authors.map(name => {
				return (
					<span key={name}>
						{name}
						<br />
					</span>
				)
			})}
		</div>
	)
}

export default Book
