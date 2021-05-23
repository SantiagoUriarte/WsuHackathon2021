import { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';

import './signIn.css';
import logo from '../../Pill.png';

const SignInPage = props => {
    return (
        <>
        <section id="sign-in-page" className="section has-text-centered">
        <h2 className="title">Welcome Back!</h2>
    
        <div class="field">
        <label class="label">Username</label>
            <div class="control">
                <input class="input" type="text" placeholder="Username" />
            </div>
        </div>
        <div class="field">
        <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text" placeholder="Password" />
            </div>
        </div>
        <Link className="button is-primary-custom" to={props.isPatient ? "/patient/menu" : "/physician/menu"}>Sign In</Link>
        
        </section>
        </>
    )
}

export default SignInPage;