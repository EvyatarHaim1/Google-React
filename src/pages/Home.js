import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';

function Home() {
    return (
        <Div>
            <div className="homeHeader">
                    <div className="homeHeader_Left">
                        <Link to="/about"> About </Link>
                        <Link to="/store"> Store </Link>
                    </div>

                    <div className="homeHeader_Right">
                        <Link to="/gmail"> Gmail </Link>
                        <Link to="/images"> Images </Link>
                        <AppsIcon />
                        <Avatar />
                    </div>
            </div>

            <div className="homeBody">
                 <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                      alt="googleIcon"
                 />
                 <div className="home_inputContainer">
                     <Search />
                 </div>
            </div>
        </Div>
    )
}

export default Home;

const Div = styled.div`
display: flex;
flex-direction: column;
height: 100vh;

.homeHeader{
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    align-items: center;

    a{
        margin-right: 20px;
        text-decoration: inherit;
        color: rgba(0,0,0,0.87);
        font-size: 15px;
    }
    a:hover{
            text-decoration: underline;
        }
}

.homeHeader_Right{
    display: flex;
    align-items: center;
    min-width:13vw;
    justify-content: space-between;
}

.homeHeader_Right > .MuiSvgIcon-root {
    margin-right: 20px;
}

.homeBody{
   flex: 1;
   display: flex;
   margin-top: 10%;
   flex-direction: column;
}

.homeBody > img{
     object-fit: contain;
     height: 100px;
}
`
