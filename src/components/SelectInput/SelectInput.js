import React from 'react'
import Select from '@material-ui/core/Select';
import { useStyles } from './SelectInputStyles'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


export default function SelectInput(props) {
    const classes = useStyles()
    const SelectSubdirItem = (name = props.items, value = 'nameTypeProduct') => {
        let x = [...new Set(name.map(i => i[value]))];
        x = name.map(i => i[value]);
        return (
            x.map((c, i) => {
                return <MenuItem key={i} value={i}>{c}</MenuItem>
            })
        );
    }
    return <React.Fragment>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
            <Select
                id="selectcomponent"
                value={props.value}
                disabled={props.disabled}
                mode={props.mode}
                defaultValue={props.defaultValue}
                onChange={(v) => {
                    console.log(v)
                    props.onChange(v)}}
            >
                {SelectSubdirItem()}
            </Select>
        </FormControl>
    </React.Fragment>
}