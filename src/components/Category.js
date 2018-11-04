import React from 'react'
import Header from "./Header";
import { Link } from "react-router-dom";


const thumbnailimage = {
  width: '100%',
  height: '60px'
}

export default () => {
  return (
    <div>
     <Header/>
        <section class="card1">
        <div class="card--content"><Link to='/category'>recommend</Link></div>
        < div class = "card--content" > < Link to = '/category' > lifestyle</Link></div >
        <div class="card--content"><Link to='/category'>drama</Link></div>
        <div class="card--content"><Link to='/category'>politics</Link></div>
        <div class="card--content"><Link to='/category'>bollywood</Link></div>
        <div class="card--content"><Link to='/category'>hollywood</Link></div>
        <div class="card--content"><Link to='/category'>movie</Link></div>
        <div class="card--content"><Link to='/category'>series</Link></div>
        <div class="card--content"><Link to='/category'>interview</Link></div>
        <div class="card--content"><Link to='/category'>imgae</Link></div>
        <div class="card--content"><Link to='/category'>videos</Link></div>
    </section>
    <div class="container">
        <div class="row">
            <div class="col-md-12 side_news dym-padding-right">
              <Link to="postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img style={{height: 79}} class="img-fluid" src="img/avengers.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Avengers is the highest grosser now
                            </p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>
                <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">
                    <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pb-3 pt-3">
                        <div class="embed-responsive embed-responsive-4by3 pt-1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/EkHTsc9PU2A"
                                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 pt-2 img-content light-bg">
                        <p class="sub-news-para left-style">Jinping’s words are far-reaching words did
                            excellent</p>
                        <p class="left-style">
                            <span class="source-style f-12">Tech Crucnch ⋅ </span>
                            <span class="time-style f-12">150 Reviews ⋅</span>
                            <span class="time-style f-12">12 hours age</span>
                        </p>
                    </div>

                </div>





                <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom pt-3 pb-2">

                    <div class="col-12 col-xs-6 pt-2 pb-0">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                                allowfullscreen></iframe>
                        </div>
                        <p class="sub-news-para mb-0">Jinping’s words are far-reaching words did
                            excellent</p>
                        <p class="mt-0">
                            <span class="source-style f-12">Tech Crucnch ⋅ </span>
                            <span class="time-style f-12">150 Reviews ⋅</span>
                            <span class="time-style f-12">12 hours age</span>
                        </p>

                    </div>
                </div>





                <div class="row mb-home-sub-lead no-gutters home-sub-lead">

                    <div class="col-12 col-xs-6 pt-3 pb-0">

                        <p class="sub-news-para left-style">The Legend passes away!</p>
                    </div>
                    <div class="col-md-12 pb-3 border-bottom">
                        <div class="row-image">
                            <div class="column-image">
                                <img src="img/ayub1.jpeg" alt="Snow" style={thumbnailimage}/>
                            </div>
                            <div class="column-image">
                                <img src="img/ayub2.jpeg" alt="Forest" style={thumbnailimage}/>
                            </div>
                            <div class="column-image">
                                <img src="img/ayub3.jpeg" alt="Mountains" style={thumbnailimage}/>
                            </div>
                        </div>
                    </div>
                </div>





              <Link to="/postdetails2">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img style={{height: 79}} class="img-fluid" src="img/debi.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Debi is now a huge success
                            </p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>


                <Link to="/postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img style={{height: 79}} class="img-fluid" src="img/ayub1.jpeg" alt=""/>
                            </div>
                        </div>

                        <div class="
                                    col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Story of a legend
                            </p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>

              <Link to="postdetails2">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img style={{height: 79}} class="img-fluid" src="img/flight.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Flight is delayed till 10p.m.
                            </p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>

              <Link to="postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img style={{height: 79}} class="img-fluid" src="img/fred.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Fred did it all of his own
                            </p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>


                <button class="btn btn-outline-dark col-md-12">
                    Load More
                </button>


            </div>


            <div class="col-md-12">

            </div>


        </div>


    </div>
    </div>
  )
}
