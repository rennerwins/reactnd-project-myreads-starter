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
		this.getAllBook()
	}

	getAllBook = () => {
		BooksAPI.getAll().then(res => {
			this.setBookShelf(res)
		})
	}

	setBookShelf = res => {
		this.setState({
			currentlyReading: res.filter(book => book.shelf === 'currentlyReading'),
			wantToRead: res.filter(book => book.shelf === 'wantToRead'),
			read: res.filter(book => book.shelf === 'read')
		})
	}

	changeBookShelf = async (book, shelf) => {
		await BooksAPI.update(book, shelf)
		this.getAllBook()
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
							change={this.changeBookShelf}
							shelf={this.state.currentlyReading}
							shelfTitle="Currently Reading"
						/>
						<BookShelf
							change={this.changeBookShelf}
							shelf={this.state.wantToRead}
							shelfTitle="Want To Read"
						/>
						<BookShelf
							change={this.changeBookShelf}
							shelf={this.state.read}
							shelfTitle="Read"
						/>
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
