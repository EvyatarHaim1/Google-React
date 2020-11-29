import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../store/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [ {term='tesla'}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term); // Live APi call
    // const data = Response; // Mock API

    console.log(data)
    return (
        <Div>
            <div className="searchPage_header">
               <Link to="">
                   <img
                       className="searchPage_logo"
                       src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                       alt="logo"
                   />
               </Link>
            <div className="searchPage_headerBody">
                 <Search hideButtons />    
                 <div className="searchPage_options">
                      <div className="optionsLeft">
                          <div className="searchPage_option">
                              <SearchIcon />
                              <Link to="/all">All</Link>
                          </div>
                          <div className="searchPage_option">
                              <DescriptionIcon />
                              <Link to="/all">News</Link>
                          </div>
                          <div className="searchPage_option">
                              <ImageIcon />
                              <Link to="/all">Images</Link>
                          </div>
                          <div className="searchPage_option">
                              <LocalOfferIcon />
                              <Link to="/all">Shopping</Link>
                          </div>
                          <div className="searchPage_option">
                              <RoomIcon />
                              <Link to="/all">Maps</Link>
                          </div>
                          <div className="searchPage_option">
                              <MoreVertIcon />
                              <Link to="/all">More</Link>
                          </div>
                      </div>

                      <div className="optionsRight">
                          <div className="searchPage_option">
                              <Link to="/settings">Settings</Link>
                          </div>
                          <div className="searchPage_option">
                              <Link to="/tools">Tools</Link>
                          </div>
                      </div>
                 </div>
            </div>
            </div>
            {term && (
                <div className="searchPage_results">
                    <p className="searchPage_resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage_result"> 
                            <a href={item.link}>
                              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                 <img
                                      className="serachPage_resultImage"
                                      src={item.pagemap?.cse_image?.length > 0 && 
                                           item.pagemap?.cse_image[0]?.src}
                                      alt=""
                                 />
                              )}
                              {item.displayLink} ▽
                            </a>
                            <a className="searchPage_resultTitle"
                               href={item.link}>
                               <h2>{item.title}</h2> 
                            </a>
                            <p className="result_snippet">
                                   {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </Div>
    )
}

export default SearchPage;

const Div = styled.div`

.searchPage_header{
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    align-items:flex-start;
    padding: 30px;
    border-bottom: 1px solid lightgray;
}

.searchPage_logo{
    object-fit: contain;
    height: 50px;
    margin-right: 50px;
}

.searchPage_headerBody
 { 
   .search {
        .search_input
        {
            margin-top: 20px;
            width: unset;
            margin: unset;
            max-width: unset;

        }
    } 
}

.searchPage_options{
    display: flex;
    align-items: center;
    color: gray;
}

.optionsLeft, .optionsRight{
    display: flex;
}

.searchPage_options a,
.optionsRight a {
    text-decoration: none;
    color: gray;
}

.optionsRight, .optionsLeft{
    display: flex;
}

.optionsRight{
    margin-left: 80px;
}

.searchPage_option{
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.searchPage_option a {
    margin-left: 5px;
}

.searchPage_result{
    margin: 40px 0;
}

.searchPage_resultsCount{
    color: #70757a;
    font-size: 14px;
}

.searchPage_results{
    max-width: 650px;
    margin-top: 20px;
    margin-left: 240px;
    margin-bottom: 100px;
}

.searchPage_resultTitle{
    text-decoration: none;
    h2{
        font-weight: 500;
    }
}

.searchPage_resultTitle:hover{
    text-decoration:underline;
}

.result_snippet{
    margin-top: 10px;
}

.serachPage_resultImage{
    object-fit: contain;
    height: 20px;
    width: 20px;
    margin-right: 10px;
}
`