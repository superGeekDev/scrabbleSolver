import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import WordBox from "../WordBox";
import {useStyles} from "./style";


function WordsList ({ wordsList, isLoading }) {
  const classes = useStyles()
  return (
      <div className={classes.wordlist}>
          {(!wordsList.length && !isLoading) ? (
              <h3>No matching words found!</h3>
          ) : (
              wordsList.map(wordInfo => <WordBox key={wordInfo.word} wordInfo={{...wordInfo}}/>)
          )}
      </div>
  )
}

export default withStyles(useStyles)(WordsList)