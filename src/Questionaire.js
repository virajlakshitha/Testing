import React, {Component} from 'react';
import './Questionaire.css';

class Questionaire extends Component{
    render(){
        return(
            <div className={"Questionaire"}>
                <div id="Sample2-header">
                    <span>Questionnaire</span>
                    <span id="Sample2-header-small">Add Questionnaire</span>
                    <span id="right-side"> aaa</span>
                </div>
                <div className="questions">
                    <div id="questions-head">Add Questionnaire<hr/></div>
                    <div id="left-fields">
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Name</td>
                                <td><input type="text" className={"Qtwo"}/></td>
                            </tr>
                        </div>
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Relate To</td>
                                <td><input type="text" className={"Qtwo"}/></td>
                            </tr>
                        </div>
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Remarks</td>
                                <td><textarea className={"Qtwo"} style={{"height":"120px"}}/></td>
                            </tr>
                        </div>
                    </div>
                    <div id="right-fields">
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Question Text</td>
                                <td><input type="text" className={"Qtwo"}/></td>
                            </tr>
                        </div>
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Answer Type</td>
                                <td><input type="text" className={"Qtwo"}/></td>
                            </tr>
                        </div>
                        <div className="tables">
                            <tr>
                                <td className={"Qone"}>Answer Values</td>
                                <td><textarea className={"Qtwo"} style={{"height":"80px"}}/></td>
                            </tr>
                        </div>
                        <button className={"addBtn"}>Add</button>
                    </div>
                    <div className={"bottom-part"}>
                        <hr/>
                        <button id={"saveBtn"}>Save</button>
                        <button id={"cancelBtn"}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Questionaire;