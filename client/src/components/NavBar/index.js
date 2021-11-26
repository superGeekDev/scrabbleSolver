import React, {useState} from 'react'

import {makeStyles, withStyles} from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles(theme => ({
  searchContainer: {
    margin: '20px 20px 0 20px',
    color: 'black'
  },
  searchBar: {
    background: '#f4c984',
  }

}))

function NavBar ({ isLoading, setSearchValue }) {
  const classes = useStyles()

  const changeSearchValue = (value) => {
      setSearchValue(value);
  }

  return (
      <div className={classes.searchContainer}>
        <SearchBar
            className={classes.searchBar}
            onRequestSearch={changeSearchValue}
            placeholder="Please provide letters..."
            autoFocus
        />
        {isLoading && <LinearProgress style={{secondary: '#9b896b'}} color='secondary' />}
      </div>
  )
}

export default withStyles(useStyles)(NavBar)