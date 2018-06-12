import React, {Component} from 'react';
import './App3.css';

class App3 extends Component{
    render(){
        return(
            <div className="App3">
                <div className="cont-head1">
                    <div className="cont-head1-header">Patient Information</div>
                    <div className="pat-info">

                    </div>
                </div>
                <div className="cont-head2-1">
                    <div className="cont-head1-header">Add to Queue</div>
                    <div className="pat-info">
                        <div id="printToken">
                            Token Number : 2
                            <button id="printBttn" name="print">Print Token</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App3;