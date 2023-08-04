import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    })
    let navigate = useNavigate()
    const onChange = (event) => {
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json ",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        })
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        if (json.success) {
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            //console.log(localStorage.getItem("authToken"))
            navigate("/");
        }

    }
    return (
        <div>
            <>
                <div className="container">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={credentials.email}
                                onChange={onChange}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={credentials.password}
                                onChange={onChange}
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit" className="m-3 btn btn-success">
                            Submit
                        </button>
                        <Link to="/createuser" className="m-3 btn btn-danger">
                            I'm a new user
                        </Link>
                    </form>
                </div>
            </>
        </div>
    )
}
