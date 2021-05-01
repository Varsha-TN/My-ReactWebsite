import React, { useState } from 'react';

function Contact() {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',

    });

    const handleInput = e => {
        const { name, value } = e.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert(`${data.fullname} wants to contact you.Message:${data.msg}. Phone:${data.phone}. Email:${data.email}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact Us
                </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={handleInput} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={handleInput} placeholder="Enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={handleInput} placeholder="Enter your email address" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea className="form-control" rows="3" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={handleInput} placeholder="Enter your email address" />
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-outline-primary mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;