import React, {useEffect, useState} from 'react'
import {Card, CardMedia} from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/core/styles'
import NavBar from "../NavBar";
import WordsList from "../WordsList";
import {getWords} from "../../services/api/ApiWord";

const useStyles = makeStyles(theme => ({
  root: {
    marging: 0,
    padding: 0,
    // padding: '10px',
    height: '100%',
  },
}))

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
      <CardMedia image='/header.png' />
      <NavBar isLoading={isLoading} setSearchValue={setSearchValue}/>
      <WordsList wordsList={words}/>
    </div>
  )
}

export default withStyles(useStyles)(MainPage)