import React from 'react'
import {Paper, Typography} from '@material-ui/core'
import useStyles from './Styles.js'

const Item = ({task,}) => {
    const classes = useStyles()
  return (
    <>
    <Paper className={classes.CardPaper}>
              <Typography>{task.todo}</Typography>
              <Typography>{task.status}</Typography>
              <Typography>{task.priority}</Typography>
          </Paper>
    </>
  )
}

export default Item