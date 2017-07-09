import React from 'react'
import Search from './Search'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	render() {
		return (
			<div className="app">
				<Route exact path="/" component={ListBooks} />
				<Route path="/search" component={Search} />
			</div>
		)
	}
}

export default BooksApp
