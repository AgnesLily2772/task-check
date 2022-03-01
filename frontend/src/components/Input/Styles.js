import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    root: {
        '& .MuiTextField-root': {
          margin:'10px',
        },
        '& .MuiButton-root' :{
          margin:'10px',
        }
      },
    paper: {
      width: '500px',
      padding: '30px',
      boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

}))