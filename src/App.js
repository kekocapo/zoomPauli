import React from 'react';
import './App.css';
import Tasks from './components/Tasks'
import tasks from './tasks.json'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

console.log(tasks);

class App extends React.Component
{
  state = {
    tasks: tasks
  }

  render()
  {
    return (
    <Container className="p-3">
      <Jumbotron style={{  backgroundColor:'pink'}}>
        <h1 className="header">Zooms Nueva Generación</h1>    
        <h2 className="">Pauli</h2> 
      </Jumbotron>
    
      <div className="container" style={{ backgroundColor:'lightblue'}}>
        <div className="row">        
            <Tasks tasks= {this.state.tasks} />    
        </div>
      </div>    
    </Container>
    )
  }
}

export default App;
