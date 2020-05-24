import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
     <main className="pa4 black-80">
        <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Select Room of your Choice</label>
                <select className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" id="select">
                    <option value = "Single Room"> Single Room </option>
                    <option value = "Delux Room"> Delux Room </option>
                    <option value = "Family Room"> Family Room </option>
                </select>
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="number">Number of Rooms</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="rooms"  id="rooms" />
            </div>
            </fieldset>
            <div className="">
            <Link to="/booked" className="btn-primary">
            Book Rooms
            </Link>
            </div>
        </div>
     </main>
     </article>
    );
}

export default Register;