import React from 'react';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Tasks extends React.Component{

    render(){

        const {task} = this.props;
       
        var link = <a></a>
     
        if (task.Link != "")  {
           link =  <a target="_blank" href={task.Link}>Link</a>
        }

        return (
            <div class="col-md-4" style={{ padding:10, backgroundColor:'lightblue'}}>
                 <div class="card">
                    <div class="card-block">
                        <h4 class="card-title">{task.Materia}</h4>
                        <h6 class="card-subtitle text-muted">{task.Dia}</h6><br/>
                        <div class="card-text p-y-1">Código: {task.Codigo}</div>
                        <div class="card-text p-y-1">Password: {task.Password}</div>
                        {link}
                    </div>
                 </div>              
            </div>
           
        )
    }
}

export default Tasks;