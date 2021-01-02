import React, {useState} from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullName: "",
        phone: "",
        email: "",
        msg: ""
    })
    const inputEvent = (event) => {
        const {name, value} = event.target
        setData((preVal) => {
            return {...preVal, [name]: value}
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullName} / ${data.email} / ${data.phone} / ${data.msg} `)
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
            </div>

            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" required className="form-control" id="exampleFormControlInput1"
                                       name='fullName' value={data.fullName} onChange={inputEvent}
                                       placeholder="Enter your name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" required className="form-control" id="exampleFormControlInput1"
                                       name='phone' value={data.phone} onChange={inputEvent}
                                       placeholder="Mobile number"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" required className="form-control" id="exampleFormControlInput1"
                                       name='email' value={data.email} onChange={inputEvent}
                                       placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          name='msg' value={data.msg} onChange={inputEvent}/>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-success" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
