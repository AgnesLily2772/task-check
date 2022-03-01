import './App.css';
import Modal from 'react-modal';
import {AppBar,Button, Container, Paper, TextField, Typography} from '@material-ui/core'
import {getItems,createItem} from './Requirements/actions';
import React,{ useState,useEffect } from 'react';
import useStyles from './Styles.js'
import Loader from './components/Loader/Loader';
import Item from './components/Item/Item';
function App() {
  const [totodo,setTodo] = useState({todo:'',status:'',priority:''})
  const [item,setItem] = useState([])
  const [open,setOpen] = React.useState(false);
  const[load,setLoad] = useState(true);
  const classes = useStyles();
  function openModal () {
    setOpen(true);
  }
  function closeModal () {
    setOpen(false);
  }
  useEffect(()=>{
    const fetchData = async() =>{
      const result = await getItems();
      console.log(result)
      setItem(result);
      setLoad(false);
    }
    fetchData()
  },[])
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await createItem(totodo);
  }
  const handleDiscard = () => {
    setTodo({todo:'',status:'',priority:''})
  }
  if(load)
    <Loader/>
  return (
    <>
    <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Typography variant="h2" align="center">Task List</Typography>
      </Container>
    </AppBar> 
    <Container>
      <Button onClick={openModal}>Add +</Button>
      <Modal ariaHideApp={false} className={classes.modal} isOpen={open} onRequestClose={closeModal}>
      <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant='h4'>Add a ToDo</Typography>
          {/* <Button float="right">X</Button> */}
          <TextField fullWidth variant="standard" label="Todo" onChange={e=>setTodo({...totodo,todo:e.target.value})}></TextField>
          <TextField fullWidth variant="standard" label="Status" onChange={e=>setTodo({...totodo,status:e.target.value})}></TextField>
          <TextField fullWidth variant="standard" label="Priority" onChange={e=>setTodo({...totodo,priority:e.target.value})}></TextField>
          <Button color="primary" variant="contained" fullWidth type='submit'>Add</Button>
          <Button color='secondary' variant="contained" fullWidth onClick={handleDiscard}>Discard</Button>
      </form>
      </Paper>
      </Modal>
    </Container>
    <Container className={classes.card}>
        {item.map((task) => (
            <Item task={task} key={task._id}/>
        ))}
    </Container>
    </>
  );
}

export default App;