import React from 'react';
import './Developer.css';
import Card from 'chart.js'

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function Developer() {
    return (
        <div className="Developer__name">
            <h1 > Developed By Alena Software Limited.</h1>
            <h1 > @ShuvroDas</h1>
            <a href="https://www.facebook.com/shuvro.das.5817">
               <FacebookIcon className="Developer__facebook" />
            </a>

            <a href="https://www.linkedin.com/in/shuvro-das-b2236b170/">
                <LinkedInIcon className="Developer__linkedin"/>
            </a>

            <a href="https://github.com/shuvro-das">
                <GitHubIcon  className="github"/>
            </a>
        </div>
    )
}

export default Developer

// className="Developer__social"
