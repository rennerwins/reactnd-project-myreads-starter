import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookShelf from './BookShelf'

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
						<BookShelf
							shelf={this.state.currentlyReading}
							shelfTitle="Currently Reading"
						/>
						<BookShelf
							shelf={this.state.wantToRead}
							shelfTitle="Want To Read"
						/>
						<BookShelf shelf={this.state.read} shelfTitle="Read" />
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
