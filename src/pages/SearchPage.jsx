import React from 'react';
import "./SearchPage.css"
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {

    const [{ term }] = useStateValue();
    console.log(term)

    const { data } = useGoogleSearch(term);
    console.log(data)

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/">
                    <img src="https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number-thumbnail.png" alt="" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hiddebuttons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">

                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                term && (

                    <div className="searchPage__results">
                        <p className='searchPage__resultCount'>
                            about {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
                        </p>


                        {
                            data?.items.map((item) => (

                                <div className="searchPage__result">
                                    <a href={item.link} className='searchPage_s_resultLink'>
                                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&  (

                                            <img src={item.pagemap?.cse_image[0]?.src} alt="" className='searchPage__resultImage' />
                                        )}
                                        {item.displayLink}
                                    </a>

                                    <a href={item.link} className='searchPage__resultTitle'>
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className='searchPage__resultdescription'>{item.snippet}</p>
                                </div>
                            ))
                        }

                    </div>)
            }
        </div>
    )
}

export default SearchPage