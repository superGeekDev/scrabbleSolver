import React, {useEffect, useState} from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import SearchField from "../SearchField";
import WordsList from "../WordsList";
import {getWords} from "../../services/api/ApiWord";
import {useStyles} from "./style";

function MainPage ({  }) {
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [words, setWords] = useState([]);

  useEffect( () => {
    if(searchValue) {
        setIsLoading(true);
        getWords(searchValue).then(({data}) => {
            setWords(data);
            setIsLoading(false);
        })
    }
  }, [searchValue])

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
          <img style={{width: '100%', margin: '0'}} src="/header.png" alt=""/>
      </div>
      <SearchField isLoading={isLoading} setSearchValue={setSearchValue}/>
      <div className={classes.contentContainer}>
        {(!words.length && !searchValue) ? (
          <h3>Welcome to Scrabble digital resolver!</h3>
        ) : (
          <WordsList wordsList={words} isLoading={isLoading}/>
        )}
      </div>
    </div>
  )
}

export default withStyles(useStyles)(MainPage)