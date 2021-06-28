import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//     <h1>Hello, World</h1>,
//     document.getElementById('root')
// );

// const name = 'Perez';
// const _element = <h1>Hello {name}</h1>

// function formatName (user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Eric',
//     lastName: 'Kisee'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

// ReactDOM.render (
//     element,
//     document.getElementById('root')
// );

// function tick () {
//     const element = (
//         <div>
//             <h1>Hello World</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome (props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// class _Welcome extends React.Component {
//     render (){
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }

// the above two components are equivalent from React's point of view.

// const element = <Welcome name="Sara"/>;

// function App () {
//     return (
//         <div>
//             <Welcome name='Ann'/>
//             <Welcome name='Shay'/>
//             <Welcome name='Mary'/>
//         </div>
//     );
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

// class Clock extends React.Component {

//     constructor (props) {
//         super(props);
//         this.state = {date : new Date()};
//     }

//     // lifecycle methods
//     componentDidMount (){
//         this.timerID = setInterval(()=> this.tick(), 1000);
//     }
//     // lifecycle methods
//     componentWillUnmount (){
//         clearInterval(this.timerID);
//     }

//     tick () {
//         this.setState({ date : new Date()});
//     }

//     render () {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

// function tick(){
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

// ReactDOM.render(
//     <Form/>,
//     document.getElementById('root')

// );

// function Form () {
//     function handleSubmit (e) {
//         e.preventDefault();
//         console.log('you clicked submit.');
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// class Toggle extends React.Component {
//     constructor (props){
//         super(props);
//         this.state = {isToggleOn : true};
//         // this binding is neccesary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick (){
//         this.setState(prevState => ({
//             isToggleOn : !prevState.isToggleOn
//         }));
//     }

//     render () {
//         return (
//             <button onClick = {this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }

// ReactDOM.render (
//     <Toggle/>,
//     document.getElementById('root')
// );

// function Greeting (props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function LoginButton (props) {
//     return (
//         <button onClick = {props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton (props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }

// class LoginControl extends React.Component {
    
//     constructor (props) {
//         super (props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogOutClick = this.handleLogOutClick.bind(this);
//         this.state = {isLoggedIn : false};
//     }

//     handleLoginClick () {
//         this.setState ({isLoggedIn : true});
//     }

//     handleLogOutClick () {
//         this.setState ({isLoggedIn : false});
//     }

//     render () {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick = {this.handleLogOutClick}/>;
//         } else {
//             button = <LoginButton onClick= {this.handleLoginClick} />;
//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn = {isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <LoginControl/>,
//     document.getElementById('root')
// );


// Inline If with Logical && Operator

// function MailBox (props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {
//                 unreadMessages.length > 0 &&
//                 <h2> You have {unreadMessages.length} unread messages. </h2>
//             }
//         </div>
//     );
// }

// const messages = ['react','re: react', 're: re: react'];
// ReactDOM.render(
//     <MailBox unreadMessages={messages} />,
//     document.getElementById('root')
// );


// // Inline If-Else with Conditional 
// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//       </div>
//     );
//   }

// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {isLoggedIn
//           ? <LogoutButton onClick={this.handleLogoutClick} />
//           : <LoginButton onClick={this.handleLoginClick} />
//         }
//       </div>
//     );
//   }


function WarningBanner (props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {

    constructor (props) {
        super (props);
        this.state = {showWarning : true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick () {
        this.setState (state => ({
            showWarning : !state.showWarning
        }));
    }

    render () {
        return ( 
            <div>
                <WarningBanner warn = {this.state.showWarning} />
                <button onClick = {this.handleToggleClick}>
                    {this.state.showWarning ? 'hide' : 'show'}
                </button>
            </div>
        );
    }
}
ReactDOM.render (
    <Page/>,
    document.getElementById('root')
);