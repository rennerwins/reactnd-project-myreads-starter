import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
	static PropTypes = {
		books: PropTypes.array,
		change: PropTypes.func.isRequired
	}

	render() {
		const { books, change } = this.props

		// Separate books by shelf
		let currentlyReading, wantToRead, read
		currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
		wantToRead = books.filter(book => book.shelf === 'wantToRead')
		read = books.filter(book => book.shelf === 'read')

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							change={change}
							shelf={currentlyReading}
							shelfTitle="Currently Reading"
						/>
						<BookShelf
							change={change}
							shelf={wantToRead}
							shelfTitle="Want To Read"
						/>
						<BookShelf change={change} shelf={read} shelfTitle="Read" />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
