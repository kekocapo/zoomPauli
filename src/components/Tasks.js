import React from 'react';
import Task from './Task';


class Tasks extends React.Component{
    render(){
        var i = 0;
        return this.props.tasks.map(task => <Task task={task} key={task.id} />);
    }
}

export default Tasks;