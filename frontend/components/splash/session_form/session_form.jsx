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
        this.usernameTyper = this.usernameTyper.bind(this);
        this.passwordTyper = this.passwordTyper.bind(this);
    }

    componentWillMount(){
        // this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.props.closeModal)
            .then(this.props.history.push(`/spots?lat=${lat}&lng=${lng}`))
    }

    handleDemoLogin() {
        const demoUser = {
            username: 'guestuser',
            password: 'password',
        };
        this.props.processForm(demoUser).then(() => this.props.closeModal());
    }



    handleErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={`error-${i}`}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );

        // let errors = this.props.errors;

        // let idx = errors.findIndex(error => error.includes(str))

        // return (
        //     <li key={idx}> {errors[idx]} </li>
        //     );
    }

    footerText(){
        if(this.props.formType === 'signup'){
            return(
                <p>Already have an account?</p>
            )
        } else {
            return(
                <p>Create a new account! </p>
            )
        }
    }

    demoUserButton() {
        if (this.props.formType === 'login' || this.props.formType === 'signup') {
            return (
                <input className="session-submit-demo"
                    type="submit"
                    value="Demo Login"
                    onClick={this.usernameTyper}
                />
            )
        }
    }

    // /// automated demoLogin

    usernameTyper() {
        let i = 0;
        let username = ' guestuser'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let username_field = document.getElementById("username");
        username_field.value = "";

        const typeWriter = () => {
            if (i < username.length) {
                username_field.value += username.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };

        typeWriter();
        setTimeout(this.passwordTyper, 1000);
        setTimeout(this.handleDemoLogin, 100);
    };

    passwordTyper() {
        let i = 0;
        const password = 'password'
        const speed = 75; /* The speed/duration of the effect in milliseconds */
        let password_field = document.getElementById("password");
        password_field.value = "";

        const typeWriter = () => {
            if (i < password.length) {
                password_field.value += password.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };
        typeWriter();
    };



    render() {
        // this.props.clearErrors();
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    {this.handleErrors()}
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

                        
                        {this.demoUserButton()}
                          
                    </div>
                        <div className="session-footer">
                            <div className="thin-line"></div>
                            {this.footerText()}
                          <p className="other-form-button">{this.props.otherForm}</p>
                        </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);