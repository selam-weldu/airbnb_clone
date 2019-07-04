import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        this.props.processForm(this.state).then(this.props.closeModal);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: 'sweldu',
            password: 'password'
        };
        this.props.processForm(demoUser)
            .then(() => this.props.closeModal());
    }

    // async demoLogin(e) {
    //     e.preventDefault();

    //     const demoUser = {
    //         username: 'sweldu',
    //         password: 'password'
    //     };

    //     const sleep = ms => new Promise(res => setTimeout(res, ms));

    //     document.getElementById('username').focus();
    //     for (let i = 1; i <= demoUser.username.length; i++) {
    //         this.setState({ username: demoUser.username.substr(0, i) });
    //         await sleep(50);
    //     }

    //     await sleep(250);

    //     document.getElementById('password').focus();
    //     for (let i = 1; i <= demoUser.password.length; i++) {
    //         this.setState({ password: demoUser.password.substr(0, i) });
    //         await sleep(50);
    //     }

    //     await sleep(250);

    //     document.getElementById('session-submit-demo').click();
    //     document.getElementById('password').blur();
    // }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    footerText(){
        if(this.props.formType === 'signup'){
            return(
                <p>Already have an account?</p>
            )
        } else {
            return(
                <p>Create a new account or do whatever </p>
            )
        }
    }


    headerButton(){
        if(this.props.formType === 'signup'){
            return(
                <p>Signup!</p>
            )
        } else {
            return(
                <label>
                    <input type="text"
                        value="Log in with Google"
                        className="login-input"
                    />
                </label>
            )
        }
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="form-logo-header"></div>
                    <div className="login-form">
                        <br />
 
                        <label>
                            <input type="text"
                                id="username"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Enter Username"
                            />
                        </label>
                        <br />
                        <label>
                            <input type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Enter Password"
                            />
                        </label>
                        <br />
                        <input className="session-submit" 
                            type="submit" 
                            value={this.props.formType} />

                        <input className="session-submit-demo"
                            type="submit"
                            value="Demo Login"
                            onClick={this.handleDemoLogin}
                        />
                          
                    </div>
                        <div className="session-footer">
                            <div className="thin-line"></div>
                            {this.footerText()}
                          <p>{this.props.otherForm}</p>
                        </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);