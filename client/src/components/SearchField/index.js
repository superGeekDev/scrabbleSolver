import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {LinearProgress} from '@material-ui/core'
import SearchBar from "material-ui-search-bar";
import {useStyles} from "./style";

function SearchField ({ isLoading, setSearchValue }) {
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

export default withStyles(useStyles)(SearchField)