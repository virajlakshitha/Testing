import React, {Component} from 'react';
import './DocHome.css';

class DocHome extends Component {
    render() {
        return (
            <div className={"DocHome"}>
                <div className={"Que-header"}>
                    <span className={"header-name"}>My Queue</span>
                    <span id={"que-small"}>Queue</span>
                </div>
                <div>
                    <div id={"summery-view"}>
                        <h4>Summery View</h4><hr/>
                        <div className={"inside"}>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Name </td>:
                                <td className={"right-field-d"}>Dr. Wasanatha</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>No. of Patients </td>:
                                <td className={"right-field-d"}>1</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Queue Status </td>:
                                <td className={"right-field-d"}>Open</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>No. of treated patients </td>:
                                <td className={"right-field-d"}>0</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Queue Type </td>:
                                <td className={"right-field-d"}>Regular</td>
                            </tr>
                        </div>
                    </div>
                    <div id={"queue-controller"}>
                        <h5>Queue Controller</h5><hr/>
                        <div className={"inside"}>
                            <hr/>
                            <div id={"hold-btn"}>Hold Queue</div>
                            <div id={"redirect-btn"}>Redirect Queue</div>
                        </div>
                    </div>
                </div>
                <div className={"list-header"}>
                    <span className={"header-name"}>Queue Order</span>
                </div>
                <div id={"que-list"}>
                    <div className={"each-list"}>
                        <div>
                            a
                        </div>
                        <div className={"each-list-bottom"}>
                            More info
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DocHome;