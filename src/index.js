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

function Welcome (props) {
    return <h1>Hello, {props.name}</h1>;
}

class _Welcome extends React.Component {
    render (){
        return <h1>Hello, {this.props.name}</h1>
    }
}

// the above two components are equivalent from React's point of view.

const element = <Welcome name="Sara"/>;

function App () {
    return (
        <div>
            <Welcome name='Ann'/>
            <Welcome name='Shay'/>
            <Welcome name='Mary'/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
