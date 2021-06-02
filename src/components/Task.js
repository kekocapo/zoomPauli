import React from 'react';

import Button from "react-bootstrap/Button";
class Tasks extends React.Component{

    renderStartRow() {
console.log("counter: "  + this.props.counter)
console.log("counter t/f: "  + (this.props.counter % 3 )=== 0)
        if ( this.props.counter % 3 === 0){
            return 'row';
        }
    };

    renderEndRow() {
        if ( this.props.counter % 3 === 0){
            return '</div>';
        }
    };


    render(){
        const {task} = this.props;
        return (
          <div>

                <div className="col-xl" style={{   padding:10, backgroundColor:'lightblue'}}>
                    
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
            </div>
        )
    }
}

export default Tasks;