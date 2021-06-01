import React from 'react';
import './App.css';
import Tasks from './components/Tasks'
import tasks from './tasks.json'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
      <h1 className="header">Zooms de Pauli</h1>     
    </Jumbotron>
  
    <div class="py-5">
    <Container fluid>
      <Tasks tasks= {this.state.tasks} />
     </Container>
     </div>
  
  </Container>
    )

  }
}

export default App;
