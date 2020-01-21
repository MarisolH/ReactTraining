import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useStyles } from './TextInputStyles'

export default function TextInput(props) {
    const classes = useStyles()

    return <React.Fragment>
        <TextField id="standard-basic" className={classes.root} label={props.label} value={props.value} onChange={(e) => props.setValue(e.target.value)} />
    </React.Fragment>
}