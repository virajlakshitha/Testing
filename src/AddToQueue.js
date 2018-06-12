import React,{Component} from 'react';
import './AddToQueue.css';

export default class AddToQueue extends Component{
    render(){
        return <div className={"AddQueue"}>
            <div className="nav-bar">
                    <ul>
                        <li>abc</li>
                        <li>efg</li>
                        <li>efg</li>
                        <li>efg</li>
                    </ul>
            </div>
            <div className="cont-head1">
                <div className="cont-head1-header">Patient Information</div>
                <div className="pat-info">

                </div>
            </div>
            {/*<div className="cont-head2">*/}
                {/*<div className="cont-head1-header">Add to Queue</div>*/}
                {/*<div className="assignTo">*/}
                    {/*<div className={"fields-left"}>*/}
                        {/*<div className={"fields-each"}>*/}
                            {/*<tr>*/}
                                {/*<td className="one">Assigned To</td>*/}
                                {/*<td><select className="two">*/}
                                    {/*<option value="Dr. ABC">Dr. ABC</option>*/}
                                    {/*<option value="Dr. QRS">Dr. QRS</option>*/}
                                    {/*<option value="Dr. LMN">Dr. LMN</option>*/}
                                {/*</select>*/}
                                {/*</td>*/}
                            {/*</tr>*/}
                        {/*</div>*/}
                        {/*<div className={"fields-each"}>*/}
                            {/*<tr>*/}
                                {/*<td className="one">Date and Time</td>*/}
                                {/*<td><div className={"dateTime"}>a</div></td>*/}
                            {/*</tr>*/}
                        {/*</div>*/}
                        {/*<div className={"fields-each"}>*/}
                            {/*<tr>*/}
                                {/*<td className="one">Assign By</td>*/}
                                {/*<td><div className={"dateTime"}>Viraj</div></td>*/}
                            {/*</tr>*/}
                        {/*</div>*/}
                        {/*<div className={"fields-each"}>*/}
                            {/*<tr>*/}
                                {/*<td className="remarks">Remarks</td>*/}
                                {/*<td><textarea style={{"width":"245px","height":"60px"}}/></td>*/}
                            {/*</tr>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<button type={"submit"} className={"submitBttn"}>Add</button>*/}
                    {/*<button type={"cancel"} className={"cancelBttn"}>Cancel</button>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>;
    }
}