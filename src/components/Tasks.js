import React from 'react';
import Task from './Task';


class Tasks extends React.Component{
    render(){      
        var i = 1;
        return this.props.tasks.map(task =>           
           
            <Task task={task} key={task.id} counter={i++}  />  
           
            );
        }
}

export default Tasks;