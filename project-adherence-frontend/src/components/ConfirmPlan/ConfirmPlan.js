import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './confirmPlan.css';
import logo from '../../Pill.png';

const ConfirmPlanPage = (props) => {
    return (
        <>
            <Navbar />
            <h1 id="confirm-plan-page-title" className="title has-text-centered">Create new medical plan</h1>
            <section id="confirm-plan-page" className="section">
            <div class="field">
                    <label htmlFor="" className="label">Patient Name</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Patient Name" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label htmlFor="" className="label">Patient Email</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Patient Email" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label htmlFor="" className="label">Medication Brand Name</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Brand name" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label htmlFor="" className="label">Medication Generic Name</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Generic Name" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label htmlFor="" className="label">How often is this dose taken?</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Dose Frequency" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label htmlFor="" className="label">How much of this does should be taken per session?</label>
                    <p class="control has-icons-right">
                        <input class="input" type="text" placeholder="Dose Amount" />
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label htmlFor="" className="label">Extra Notes</label>
                    <p class="control has-icons-right">
                        <textarea id="extraNotes" class="textarea" placeholder="e.g extra info, drug warnings, etc"></textarea>
                        <span class="icon is-small is-right">
                            <i class="fas fa-pencil-alt"></i>
                        </span>
                    </p>
                </div>
                <button className="button is-primary-custom" onClick={() => {
                    alert("Access Code emailed to Patient!")
                }}>Save</button>
            </section>

        </>
    )
}


export default ConfirmPlanPage;