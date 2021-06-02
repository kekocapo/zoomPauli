import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
class Tasks extends React.Component{

    render(){

        const {task} = this.props;
       
        var link = <div></div>
     
        if (task.Link !== "")  {
           link =  <a target="_blank" rel="noreferrer" href={task.Link}>Link</a>
        }

        return (
            <div className="col-4" style={{ padding:10, backgroundColor:'lightblue'}}>
                 <div className="card mb-4">
                    <div className="card-block">
                        <h4 className="card-title">{task.Materia}</h4>
                        <h6 className="card-subtitle text-muted">{task.Dia}</h6><br/>
                        <div className="card-text p-y-1">Código: {task.Codigo}</div>
                        <div className="card-text p-y-1">Password: {task.Password}</div>
                        <div style={{paddingTop:5}}> 
                          <Button style={{backgroundColor:'pink', color:'black'}} href={task.Link}>UNIRSE</Button>
                        </div>

                    </div>
                   
                        
                        
                 </div>              
            </div>
           
        )
    }
}

export default Tasks;