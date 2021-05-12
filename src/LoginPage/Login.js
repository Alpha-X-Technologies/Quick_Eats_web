import { getDefaultNormalizer } from "@testing-library/dom";
import React,  { Component } from "react";
import { connect} from 'react-redux';

import { userActions } from '../_actions';


export class Login extends Component {

    constructor(props) {
        
        super(props);
        
        // reset login status...COME BACK TO THIS
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        // const { dispatch } = this.props;
        if (email && password) {
             this.props.sendData(email, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                    <label>Email address</label>
                    <input type="email" defaultValue={email} className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange} />
                    {submitted && !email &&
                        <div className="help-block">email is required</div>}
                </div>

                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label>Password</label>
                    <input type="password" defaultValue={password} className="form-control" name="password" placeholder="Enter password" onChange={this.handleChange} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>}
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (email, password) => dispatch(userActions.login(email, password)) ,
        logout:()=> dispatch(userActions.logout())
     
    };
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectedLoginPage 