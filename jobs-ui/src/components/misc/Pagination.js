import React, { Component } from 'react'

// Object
// content: ...
// empty: false
// first: true
// last: false
// number: 0
// numberOfElements: 20
// pageable: {sort: {…}, offset: 0, pageSize: 20, pageNumber: 0, unpaged: false, …}
// size: 20
// sort: {sorted: false, unsorted: true, empty: true}
// totalElements: 1000
// totalPages: 50

class Pagination extends Component {

  handlePagination = (number) => {
    if (number < 0 || number >= this.props.pagination.totalPages) {
      return
    }
    this.props.searchJob(this.props.searchText, number, this.props.pagination.size)
  }

  render() {
    const chevronLeftClassName = this.props.pagination && this.props.pagination.first ? "disabled" : "waves-effect"
    const chevronRightClassName = this.props.pagination && this.props.pagination.last ? "disabled" : "waves-effect"

    return (
      <div className={this.props.className} >
        <ul className="pagination">
          <li className={chevronLeftClassName}>
            <a href="#!" onClick={() => this.handlePagination(this.props.pagination.number - 1)}>
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li className="active light-blue darken-2"><a href="#!">{this.props.pagination.number + 1}</a></li>
          <li className={chevronRightClassName}>
            <a href="#!" onClick={() => this.handlePagination(this.props.pagination.number + 1)}>
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Pagination