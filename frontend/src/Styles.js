import { makeStyles } from "@material-ui/core/styles";

export default makeStyles (()=>({
    modal:{
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        marginRight: '-50%',
    },
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
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    CardPaper:{
        margin:'20px',
        padding: '20px',
        textAlign:'center',
        boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 3px 3px 3px 3px inset',
    },
    card:{

        display: 'grid',
        gridTemplateColumns:'auto auto auto',
    },
}));
