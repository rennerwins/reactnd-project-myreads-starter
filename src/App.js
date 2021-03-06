import React from 'react'
import Search from './Search'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		this.getAllBook()
	}

	getAllBook = async () => {
		const res = await BooksAPI.getAll()
		await this.setState({ books: res })
	}

	changeBookShelf = async (book, shelf) => {
		if (book.shelf !== shelf) {
			await BooksAPI.update(book, shelf)
			book.shelf = shelf
			this.setState(prevState => ({
				books: prevState.books.filter(data => data.id !== book.id).concat(book)
			}))
		}
	}

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() =>
						<ListBooks
							books={this.state.books}
							change={this.changeBookShelf}
						/>}
				/>
				<Route
					path="/search"
					render={() =>
						<Search books={this.state.books} change={this.changeBookShelf} />}
				/>
			</div>
		)
	}
}

export default BooksApp
