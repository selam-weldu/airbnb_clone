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

    componentWillMount(){
        this.props.removeErrors();
    }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
            .then(this.props.closeModal);
            // .then(this.props.errors.fill(""));
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: 'sweldu',
            password: 'password'
        };
        this.props.processForm(demoUser).then(() => this.props.closeModal());
    }



    handleErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );

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
                    
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
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

                        <input className="session-submit-demo"
                            type="submit"
                            value="Demo Account"
                            onClick={this.handleDemoLogin}
                        />
                          
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