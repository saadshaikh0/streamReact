import React from 'react';
import {Bar,Line,Pie,Doughnut} from 'react-chartjs-2';



class DashBoard extends React.Component{

    constructor(props){
       
        this.barRef=React.createRef();
        this.options={
            responsive:true
        }
        this.state={
            chartData:{
                labels:['Physics','Chemistry','Maths','Biology'],
                datasets:[
                    {
                        label:'Views',
                        data:[
                            20,
                            15,
                            11,
                            25
                           
                        ],
                        backgroundColor:
                        [
                            'rgb(255,99,132)',
                            'rgb(54,162,235)',
                            'rgb(255,206,86)',
                            'rgb(75,192,192)'
                            
                        ]
                    }
                ]
            }
        }
    }
    componentDidMount(){
      
    }

render(){
    return (<React.Fragment>
    <p>My DashBoard</p>
    <div style={{display:"flex",marginTop:"100px"}}>
    <div style={{width:"50%",position:"relative"}}>
    <Bar  height="250px" ref={this.barRef} data={this.state.chartData} options={this.options}/>
    </div>
    <div style={{width:"50%"}}>
    <Doughnut height="250px" data={this.state.chartData} options={this.options}/>

    </div>
    </div>
    </React.Fragment>
    );
}


}

export default DashBoard;