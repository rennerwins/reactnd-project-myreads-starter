import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
	const { book } = props
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<BookCover image={book.imageLinks.thumbnail} />
					<div className="book-shelf-changer">
						<select>
							<option value="none" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<BookTitle title={book.title} />
				<BookAuthors authors={book.authors[0]} />
			</div>
		</li>
	)
}

Book.propTypes = {
	book: PropTypes.object.isRequired
}

const BookCover = props => {
	const { image } = props
	return (
		<div
			className="book-cover"
			style={{
				width: 128,
				height: 193,
				backgroundImage: `url(${image})`
			}}
		/>
	)
}

BookCover.propTypes = {
	image: PropTypes.string.isRequired
}

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

const BookAuthors = props => {
	const { authors } = props
	return (
		<div className="book-authors">
			{authors}
		</div>
	)
}

export default Book
