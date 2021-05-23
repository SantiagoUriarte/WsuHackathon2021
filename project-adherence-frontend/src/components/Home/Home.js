import { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';

import './home.css';
import logo from '../../Pill.png';

const HomePage = (props) => {
    const [physicianVersion, setPhysicianVersion] = useState(props.physicianVersion);

    return (
    <>
        <section className="isWholeScreen has-text-centered">
            <section id="LogoSection">

            <img src={logo} alt="" />
            <h1 className="title">DailyDose</h1>
            </section>
            <section id="LoginButtonSection">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <button className="button">Sign up</button>
                        </div>
                        <div className="column">
                            <Link className="button is-primary-custom" to={props.isPatient ? "/patient/sign-in" : "/physician/sign-in"}>Sign in</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </>
    )
}
export default HomePage;