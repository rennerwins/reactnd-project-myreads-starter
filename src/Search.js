import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends Component {
	static PropTypes = {
		books: PropTypes.array,
		change: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchBooks: []
	}

	// Update query to local state
	updateQuery = event => {
		let { value } = event.target
		this.setState({ query: value })
		value ? this.searchBooks(value) : this.emptyList()
	}

	// Search books from api
	searchBooks = async query => {
		const res = await BooksAPI.search(query, 20)

		if (res.error === undefined) {
			// Prevent book duplication
			const checkBookDuplication = res.filter(
				(book, index, arr) =>
					arr.findIndex(b => {
						return b.id === book.id
					}) === index
			)

			// Check currently existing books
			const checkShelf = checkBookDuplication.map(book => {
				const existingBook = this.props.books.find(data => data.id === book.id)
				if (existingBook) book.shelf = existingBook.shelf
				return book
			})

			this.setState({ searchBooks: checkShelf })
		} else {
			this.emptyList()
		}
	}

	emptyList = () => {
		this.setState(() => ({ searchBooks: [] }))
	}

	render() {
		const { searchBooks } = this.state
		const { change } = this.props
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							onChange={this.updateQuery}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{searchBooks
							? searchBooks.map(data => {
									return <Book key={data.id} book={data} change={change} />
								})
							: null}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
