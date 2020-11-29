import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';
import { actionTypes } from '../store/reducer';

function Search({ hideButtons = false }) {

    const [{}, dispatch ] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = e => {
        e.preventDefault();

       dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: input
       })
        
        history.push('/search');
    }

    return (
        <Div className="search">
          <form>
            <div className="search_input">
                <SearchIcon  
                             className="searchInput_Icon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div> 
            {!hideButtons ? (

            <div className="search_buttons">
                <Button type="submit"
                        onClick={search}
                        variant="outlined"> Google Search </Button>
                <Button variant="outlined"> I'm Feeling Lucky </Button>
            </div>
            ) : (
            <div className="search_buttons">
                <Button className="buttonsHidden" 
                        type="submit"
                        onClick={search}
                        variant="outlined"> Google Search </Button>
                <Button className="buttonsHidden"
                        variant="outlined"> I'm Feeling Lucky </Button>
            </div>
            )}
          </form>
        </Div>
    )
}

export default Search;

const Div = styled.div`
.search_input{
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 30px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 75vw;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 560px;
    input{
        flex: 1;
        padding: 10px 20px;
        border: none;
    }
    input:focus{
        outline-width: 0;
    }
    .searchInput_Icon{
        color: gray;
    }
}

.search_buttons{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}

.search_buttons button{
    margin: 5px;
    padding: 7px 15px;
    background-color: #f8f8f8;
    border: 1px solid white;
    text-transform: inherit;
    color: #5f6368;

    :hover{
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        background-image: --webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
        background-color: #f8f8f8;
        border: 1px solid #c6c6c6;
        color: #222;
    }
}

.search_buttons > .buttonsHidden {
    display: none !important;
}
`
