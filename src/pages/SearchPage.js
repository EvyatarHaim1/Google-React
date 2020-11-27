import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';

function SearchPage() {
    const [ {term}, dispatch] = useStateValue();
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