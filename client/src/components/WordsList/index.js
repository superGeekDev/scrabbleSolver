import React, {useState} from 'react'

import {makeStyles, withStyles} from '@material-ui/core/styles'
import SearchBar from 'material-ui-search-bar';

import { LinearProgress } from '@material-ui/core'
import WordBox from "../WordBox";

const useStyles = makeStyles(theme => ({
wordlist: {
    padding: '10px 30px',
  }
}))


function WordsList ({ wordsList }) {
  const classes = useStyles()
  return (
      <div className={classes.wordlist}>
          {!wordsList.length ? (
              <h3>No matching words found!</h3>
          ) : (
              wordsList.map(wordInfo => <WordBox key={wordInfo.word} wordInfo={{...wordInfo}}/>)
          )}
      </div>
  )
}

export default withStyles(useStyles)(WordsList)