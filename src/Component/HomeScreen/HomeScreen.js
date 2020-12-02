import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import About from './About/About';
import Cource from './Courses/Cource';
import Home from './Home/Home';
import Login from './login/Login';
import Register from './Register/Register';
import Standerd from './Standerd/Standerd';

export class HomeScreen extends Component {
    
    
    render() {
        const items=[
            {
                name:'Home',
                link:'/home'
            },
            {
                name:'About',
                link:'/about'
            },
            {
                name:'Courses',
                link:'/courses'
            },
            {
                name:'Standerd',
                link:'/std'
            }
        ];
        const list=items.map((item) => 
        <li class="nav-item active">
            <a class="nav-link" href={item.link}>{item.name} 
                <span class="sr-only">(current)</span>
            </a>
        </li>
        );
        return (
            <Router>

            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            {list}
                        </ul>

                        <div class="navbar">
                            <Link to='/login'><a href='/login' className='nav-link'>Login</a></Link>
                            <Link to='/register'><a href='/' className='nav-link'>Registration</a></Link>
                         </div>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/about' component={About} />
                <Route path='/courses' component={Cource} />
                <Route path='/std' component={Standerd} />
            </Switch>
            </Router>
        )
    }
}

export default HomeScreen
