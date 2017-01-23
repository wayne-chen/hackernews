import React, { Component } from 'react';
import './App.css';

const list = [
    {
        title: 'Playing with React', 
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

class App extends Component {
  render() {
    return (
        <div className="App">
            {
                list.map(function(item){
                    return (
                        <div key={item.objectID}>
                            <div><a href={item.url}>{item.title}</a></div>
                            <div>Authors: {item.author}</div>
                            <div>Comments({item.num_comments})</div>
                            <div>{item.points} points</div>
                        </div>
                    );
                })}
        </div>
    );
  }
}

export default App;
