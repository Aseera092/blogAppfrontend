import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data, setdata] = useState(
        {

            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8081/signIn", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Succefully added")

                } else {
                    alert("error")
                }
            }
        )
    }
    return (
        <div>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email-ID</label>
                                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readvalue}>Login</button>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <a href='http://localhost:8081/signup'>click here for Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default Login