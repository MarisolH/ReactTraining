export const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      width: '35em',
      height: '2em',
      display: 'flex',
      justifyContent: 'space-between',
      alignIitems: 'flex-end',
    },
    closeButton: {
      position: 'absolute',
      marginLeft:25,
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });