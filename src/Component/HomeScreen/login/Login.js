import React, { Component } from 'react'
import { BrowserRouter as Router,
    Switch,Route,Link} from 'react-router-dom'
import './login.css'


export class Login extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className='container'>
                    <div className='main-body pt-5 pb-5'>
                        <h1 className='heading'>Login</h1>

                        <div className='form-group mt-4 ml-1 mr-1'>
                            <label>Email Address</label>
                            <input type='text' id='id' className='form-control' />
                        </div>

                        <div className='form-group mt-4 ml-1 mr-1'>
                            <label>Password</label>
                            <input type='password' id='password' className='form-control' />
                        </div>

                        <div className='login-button form-group mt-4'>
                            <Link to='/register'><button  className='btn btn-success'>Login</button></Link>
                        </div>
                        
                    </div>
                </div>
                </div>
                <Switch>
                    <Route path='/register' />
                  </Switch>
                </Router>
        )
    }
}

export default Login
