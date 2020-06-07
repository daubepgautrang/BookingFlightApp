import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Navbar from './navbar'
import axios from 'axios'
import queryString from 'query-string'

export default class Booking extends Component {
    constructor(props){
        super(props);

        this.state={
            ticket : {}
        }
    }
    componentDidMount() {
        let url = this.props.location.search;
      let params = queryString.parse(url);
        axios.get('http://localhost:5000/flights/' + params.id)
        .then(res => this.setState(
            this.state.ticket =  res.data,
            console.log(res.data)
        ))
    }
    render() {
        return (
           

            <div className="flex-row">
                <form className="ticket-information">
                    <h1>Thông tin chuyến bay</h1>
                    <h5>Tên chuyến bay: </h5>
                    <h5>{this.state.ticket.flightName}</h5>
                    <h5>Ngày bay: </h5>
                    <h5>{this.state.ticket.arrivalDate}</h5>
                    <h5>Nơi đi:</h5>
                    <h5>{this.state.ticket.arrivalLocation}</h5>
                    <h5>Ngày đến</h5>
                    <h5>{this.state.ticket.departureDate}</h5>
                    <h5>Nơi đến:</h5>
                    <h5>{this.state.ticket.departureLocation}</h5>
                    <h2>Giá tiền</h2>
                    <h2><strong>{this.state.ticket.airfares} 000 VND</strong></h2>
                    <h5>Đây là thông tin mô phỏng, chưa hoàn thiện giao diện !</h5>
                    
                </form>
                <form className="form-booking">
                <h1>Điền thông tin khách hàng</h1>
                    <label className="label-form">Họ Tên: (Vd: Nguyen)</label> 
                    <input className="form-control" placeholder="Nhập tên"></input>

                    <label className="label-form">Số điện thoại:</label> 
                    <input className="form-control" placeholder="Nhập số điện thoại"></input>

                    <label className="label-form">Email:</label> 
                    <input className="form-control" placeholder="Email:"></input>

                    <label className="label-form">CMND:</label> 
                    <input className="form-control" placeholder="CMND:"></input>
                    
                    <label className="label-form">Số thẻ tín dụng:</label> 
                    <input className="form-control" placeholder="Số thẻ tín dụng:"></input>
                    
                    <label className="label-form">Tên trên thẻ:</label> 
                    <input className="form-control" placeholder="CMND:"></input>

                    <button className="btn">Submit</button>
                </form>

            </div>
            
        )
    }
}