import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//     <h1>Hello, World</h1>,
//     document.getElementById('root')
// );

const name = 'Perez';
const _element = <h1>Hello {name}</h1>

function formatName (user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Eric',
    lastName: 'Kisee'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render (
    element,
    document.getElementById('root')
);