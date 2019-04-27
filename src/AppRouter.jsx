import React from 'react';
import Menu from './Pages/Menu/index';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from './Pages/Footer/Footer';


// import Todos from './Pages/Todos';


function Error404 () {
    return (
        <div>
            Error 404.
        </div>
    );
}

function Layout (props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div> 
    );
}

function Header () {
    return (
        <nav>
            <Menu />
            {/* <NavLink activeClassName="is-active" to="/todos" exact>Todos</NavLink> */}
            <NavLink activeClassName="is-active" to="/register" exact>Register</NavLink>
            <NavLink activeClassName="is-active" to="/login" exact>Login</NavLink>
        </nav>
    );
}

function AppRouter () {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/register" component={Register} exact/>
                    <Route path="/login" component={Login} exact/>
                    {/* <Route path="/todos" component={Todos} exact/> */}
                    {/* <Route path="/todo/:id/edit" component={EditTodo} exact/> */}
                    <Route path="*" component={Error404}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}


export default AppRouter;