import React, {Component} from 'react';
import Data from '../data.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor (props) {
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeOrigin = this.onChangeOrigin.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            origin: '',
            destination: '',
            date: new Date ,
        }
    }

    onChangeOrigin(e) {
        this.setState({
            origin : e.target.value
        })
    }
    onChangeDestination(e) {
        this.setState({
            destination : e.target.value
        })
    }
    
    onChangeDate(e) {
        this.setState({
            date : e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        
    }
    render() {
        return (
            <div>

                <form className="home-form">
                    <div className="form-group">

                        <label className = "label-form">Departure: </label>
                        <Autocomplete 
                            
                            onSelect = {this.onChangeOrigin}
                            id="Origin"
                            options={OriginList}
                            getOptionLabel={(option) => option.diadiem}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Origin" variant="outlined" />}
                        />
                    </div>
                    <div className="form-group">
                        <label className = "label-form">Arrival: </label>
                        <Autocomplete 
                            onSelect = {this.onChangeDestination}
                            id="Destination"
                            options={OriginList}
                            getOptionLabel={(option) => option.diadiem}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Destination" variant="outlined" />}
                        />
                    </div>
                    <div className="form-group">
                    <label className = "label-form">Date: </label>
                        <div>
                        <TextField
                            onChange = {this.onChangeDate}
                            id="date"
                            label="Date"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>
                    </div>
                    <button onClick = {this.onSubmit} className="btn btn-secondary">
                        <Link to = "/search" >Search</Link></button>
                </form>
                
            </div>
        )
    }
}

const OriginList = [
    {diadiem: 'Ha Noi'},
    {diadiem: 'Ho Chi Minh'},
    {diadiem: 'Da Nang'},
    {diadiem: 'Hue'},
    {diadiem: 'Buon Ma Thuot'},
    
]