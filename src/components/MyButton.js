import React from "react";
import Button from "@material-ui/core/Button";

export default function MyButton(props) {
  return (
    <div>
      <Button
        variant='contained'
        color={props.color}
        value={props.value}
        size='medium'
        onClick={e => props.onClickButton()}
      >
        {props.text}
      </Button>
    </div>
  );
}
