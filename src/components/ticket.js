import React, {Component} from 'react';
import './ticketStyle.css';
import { BrowserRouter as Router,useLocation} from 'react-router-dom';
import axios from 'axios'
import queryString from 'query-string'


export default class ticket extends Component {
    constructor(props) {
      super(props);

      this.state = {
          ticketlist: [] ,
      }
    }
  
    componentDidMount() {
      let url = this.props.location.search;
      let params = queryString.parse(url);
      console.log(params);
      const flight = {
        arrivalDate: params.date,
        arrivalLocation: params.origin,
        departureLocation: params.destination

      }
      axios.post('http://localhost:5000/flights/search/filterticket', flight )
      .then((res)=> {
        
        this.setState({
          ticketlist: res.data
        })
        console.log(this.state.ticketlist)
      })
    }

    render() {
        return (        
          <div>
            {this.state.ticketlist.map(item => 
              <div className="card">
                <div>
                  <h5>Name: {item.flightName} </h5>
                  <br></br>
                  <div>
                    <span>{item.arrivalDate.substring(0,10)} </span>
                    <img src="https://img.icons8.com/officel/16/000000/airplane-mode-on.png"/>
                    <span><strong>{item.arrivalLocation}</strong></span>
                  </div>
                  <br></br>
                  <div>                  
                    <span>{item.departureDate.substring(0,10)} </span>
                    <img src="https://img.icons8.com/officel/16/000000/airplane-mode-on.png"/>
                    <span><strong>  {item.departureLocation}</strong></span>
                  </div>
                  
                  <div>
                    <span className="btn"><strong>{item.airfares} VND</strong></span>
                  </div>

                  
                </div>
                
              </div>
              )}
          </div>         
                
        )
    }
}


