import React from 'react';
import Logo from '../NetcareLogo.png'

export default class Content extends React.Component {
    render() {
        return (
            <>
                <div id="wrapper">
                    <div id="content">
                        <img src={Logo} alt='' />
                    </div>
                </div>
            </>
        );
    }
}