import React, {useState} from 'react'
import { withStyles } from "@material-ui/core/styles";


import { makeStyles } from '@material-ui/core/styles'
import {Button, Card, CardContent, CardMedia} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wordItem: {
      cursor: 'pointer',
      marginTop: '10px',
      background: '#f2d99b',
      padding: 0
    // display: 'flex',

  },
  wordBox: {
      display: 'flex',
      flexDirection: 'raw',
      justifyContent: 'space-between'
      // alignItems: 'center',
      // justifyContent: 'center',
  }
}))

function WordBox ({ wordInfo }) {
  const classes = useStyles()
  const [showDescription, setShowDescription] = useState(false);
  return (
      <Card
          onClick={() => {
            setShowDescription(!showDescription);
          }}
          className={classes.wordItem}
      >
        <CardContent>
          <div className={classes.wordBox}>
              <div style={{flex: '4', paddingLeft: '100px'}}>
                  <h3>{wordInfo.word}</h3>
                  {wordInfo.description && (
                      showDescription ? (
                          <>
                              <h4>Definition:</h4>
                              <p>{wordInfo.description}</p>
                          </>
                      ) : (<p>Click to see the definition</p>)
                  )
                  }
              </div>
              <div style={{display: 'flex', alignItem: 'center', justifyContent: 'center', flex: '4'}}>
                <span style={{padding: '30px 20px'}}>Score: <b>{wordInfo.score}</b></span>
              </div>
          </div>
        </CardContent>
      </Card>
  )
}

export default withStyles(useStyles)(WordBox)