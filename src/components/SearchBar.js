import React from 'react'

import useForm from '../hooks/useForm'
import { connect } from 'react-redux'
import { searchPosts } from '../actions/postAction'

const SearchBar = ({ searchPosts }) => {
  const [keyword, bind] = useForm('')
  const handleSubmit = e => {
    e.preventDefault()
    searchPosts(keyword)
  }
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <div className="nav-wrapper indigo">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input id="search" type="search" value={keyword} {...bind} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

const mapStateToProps = null

export default connect(mapStateToProps, { searchPosts })(SearchBar)
