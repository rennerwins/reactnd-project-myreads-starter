import React, { Component } from 'react'

class BookShelfChanger extends Component {
	constructor(props) {
		super(props)

		this.state = {
			shelf: props.shelf
		}
	}

	handleChangeBookShelf = (event) => {
    const { book, change } = this.props
    let { value } = event.target

    this.setState({ shelf: value })
    change(book, value)
  }

	render() {
		return (
			<div className="book-shelf-changer">
				<select
          value={this.state.shelf}
          onChange={this.handleChangeBookShelf}
				>
					<option value="none" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default BookShelfChanger
