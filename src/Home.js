import React from 'react';
import logo from "./logo-15.gif";

class Home extends React.Component {
    render() {

        return(
            //outer container to position the inner container
            <div className='tab-content-container'>
                {/*inner container that contains the content*/}
                <div style={{padding: 0}} className='page-content'>   
                        {/*image of the logo on the home page*/}
                        <img className='img-home' src={logo} />
                </div>
            </div>
        )
    }
}

export default Home;