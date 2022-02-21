import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Nav = () => {
    return (

        <Router basename='/auth/'>

            <div className="App" >
                <div className="appAside" />
                <div className="appForm">
                    <div className="pageSwitcher">
                        <NavLink
                            to="/sign-in"
                            activeClassName="pageSwitcherItem-active"
                            className="pageSwitcherItem"
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            exact
                            to="/sign-up"
                            activeClassName="pageSwitcherItem-active"
                            className="pageSwitcherItem"
                        >
                            Sign Up
                        </NavLink>
                    </div>

                    <div className="formTitle">
                        <NavLink
                            to="/sign-in"
                            activeClassName="formTitleLink-active"
                            className="formTitleLink"
                        >
                            Sign In
                        </NavLink>{" "}
                        or{" "}
                        <NavLink
                            exact
                            to="/sign-up"
                            activeClassName="formTitleLink-active"
                            className="formTitleLink"
                        >
                            Sign Up
                        </NavLink>
                    </div>

                    <Route path="/sign-in" component={SignInForm} />
                    <Route exact path="/sign-up" component={SignUpForm} />

                </div>
            </div >
        </Router >
    )
}

export default Nav