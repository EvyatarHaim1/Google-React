import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';

function SearchPage() {
    const [ {term}, dispatch] = useStateValue();
    // const { data } = useGoogleSearch(term); // Live APi call
    const data = Response;

    console.log(data)
    return (
        <Div>
            <div className="searchPage_header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage_results">
                
                </div>
        </Div>
    )
}

export default SearchPage;

const Div = styled.div``