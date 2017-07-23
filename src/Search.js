import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'
import QueryList from './utils/QueryList'
import PropTypes from 'prop-types'

class Search extends Component {
	static PropTypes = {
		books: PropTypes.array,
		change: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchBooks: [],
		queryList: QueryList
	}

	// Update query to local state
	updateQuery = event => {
		let { value } = event.target
		this.setState({ query: value })
		this.searchBooks(value)
	}

	// Search books from api
	searchBooks = async query => {
		if (query === '') {
			this.setState({ searchBooks: [] })
		} else {
			const res = await BooksAPI.search(query)
			if (!res.error) {
				res
					? this.setState(() => ({ searchBooks: res }))
					: this.setState(() => ({ searchBooks: [] }))
			} else {
				this.setState(() => ({ searchBooks: [] }))
			}
		}
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
