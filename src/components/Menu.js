import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {
    render(props) {
        return (
            <div class="menu" >
                <ul>
                    {this.props.Menu}
                </ul>
            </div >
        );
    }
}