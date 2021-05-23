import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './mainMenu.css';
import logo from '../../Pill.png';
import profile from '../../profile.png'

const MainMenuPage = (props) => {
    return (
        <>
            <Navbar />
            <section id="main-menu-page">
                <section className="section" id="greetings">
                    <div className="columns is-mobile">
                        <div className="column">
                            <h1 className="title">Good Morning, <span className="has-text-weight-bold">Kennedy</span></h1>
                        </div>
                        <div className="column is-narrow">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src={profile} />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="section" id="search-bar">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="Search" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-search"></i>
                            </span>
                        </p>
                    </div>
                </section>
                <section className="section" id="menuTiles">
                    <div className="columns is-mobile">
                        <div className="column">
                            <Link id="newPlan-tile" className="button tile" to="/confirmPlan">{props.blueTileValue}</Link>
                        </div>
                        <div className="column">
                            <button id="viewPlans-tile" className="button tile">View Plans</button>
                        </div>
                    </div>
                    <div className="columns is-mobile">
                        <div className="column">
                            <button id="calendar-tile" className="button tile">Calendar</button>
                        </div>
                        <div className="column">
                            <button id="viewPatients-tile" className="button tile">{props.redTileValue}</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default MainMenuPage;