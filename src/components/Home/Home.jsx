import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import HacktoberfestIcon from './../../assets/HacktoberfestIcon.jpg';

class Home extends Component {


    render() {
        return (
            <div className="home-containe">
                <div className="header-text">
                    <h1>Welcome to Hacktoberfest 2022!</h1>
                    <p>“When we have welcoming communities of contributors, open source software gets better and more useful to everyone.” -- Limor Fried</p>
                </div>
                <div className="head-btns">
                    <Link to="/contributor" className="btn btn-white">
                        <p className="btn-text">Contributors List</p>
                    </Link>
                </div>

                <div className="splash-image">
                    <img src={HacktoberfestIcon} alt="animation" className="home-anime" />

                </div>
           
            </div>
        )
    }
}

export default Home;