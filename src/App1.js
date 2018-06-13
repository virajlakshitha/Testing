import React, {Component} from 'react';
import './header.css';

class App1 extends Component{
	constructor(props){
		super(props);
	}
    render(){
        return(
            <div className="App1">
                <aside className="nav-bar">
                    <ul>
                        <li>abc</li>
                        <li>efg</li>
                        <li>efg</li>
                        <li>efg</li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default App1;