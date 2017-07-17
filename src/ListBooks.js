import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BooksGrid from './BooksGrid'

class ListBooks extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
	}
	componentDidMount() {
		BooksAPI.getAll().then(res => {
			this.setState({
				currentlyReading: res.filter(book => book.shelf === 'currentlyReading'),
				wantToRead: res.filter(book => book.shelf === 'wantToRead'),
				read: res.filter(book => book.shelf === 'read')
			})
		})
	}
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<BooksGrid books={this.state.currentlyReading} />
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<BooksGrid books={this.state.wantToRead} />
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<BooksGrid books={this.state.read} />
							</div>
						</div>
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
