import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useStyles } from './TextInputStyles'

export default function TextInput(props) {
    const classes = useStyles()

    return <React.Fragment>
        <TextField id="standard-basic"
            className={classes.root}
            label={props.label}
            value={props.value}
            type={props.type}
            onChange={(e) => {
                if (props.type === 'number') {
                    props.setValue(Number(e.target.value))
                } else {
                    props.setValue(e.target.value)
                }
            }

            }
        />
    </React.Fragment>
}