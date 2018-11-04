import React, { Component } from 'react'
import Header from "./Header";
import { Link } from "react-router-dom";


const thumbnailimage = {
    width: '100%',
    height: '60px'
}

export default class Home extends Component {
    state = {
       value: 'select'
    }
    handleChange = (event) => {
        if (this.value) window.location.href = this.value
    }
   render() {
    return (
      <div>
     <Header />
      
    <section class="card1">
        <div class="card--content"><Link to='/category'>recommend</Link></div>
        <div class ="card--content"><Link to ='/category'>entertainment</Link></div>
        <div class="card--content"><Link to='/category'>images</Link></div>
        <div class="card--content"><Link to='/category'>politics</Link></div>
        <div class="card--content"><Link to='/category'>sports</Link></div>
        <div class="card--content"><Link to='/category'>economy</Link></div>
        <div class="card--content"><Link to='/category'>technology</Link></div>
        <div class="card--content"><Link to='/category'>lifestyle</Link></div>
        <div class="card--content"><Link to='/category'>international</Link></div>
        <div class="card--content"><Link to='/category'>others</Link></div>
    </section>

     <div class="container">
        <div class="row">

            <div class="top_slider main-news col-md-12 pb-3 pt-2">

                <div class="slide">
                    <Link to="postdetails">
                        <div class="card text-white border-0 rounded-0">
                            <img width="300" height="168" src="img/henry.jpg" class="card-img rounded-1"/>
                            <div class="card-img-overlay rounded-0">
                                <h5 class="card-title">Henry Cavill as The Witcher's Geralt!</h5>

                            </div>

                        </div>
                    </Link>
                </div>
                <div class="slide">
                    <Link to="postdetails2">
                        <div class="card text-white border-0 rounded-0">
                            <img width="300" height="168" src="img/2.jpg" class="card-img rounded-0"/>
                            <div class="card-img-overlay rounded-0">
                                <h5 class="card-title">Real humiliated at Nou Camp
                                </h5>
                            </div>

                        </div>
                    </Link>
                </div>
                <div class="slide">
                     <Link to="postdetails">
                        <div class="card text-white border-0 rounded-0">
                            <img width="300" height="168" src="img/friend.jpg" class="card-img rounded-0"/>
                            <div class="card-img-overlay rounded-0">
                                <h5 class="card-title">From friends to lovers
                                </h5>

                            </div>

                        </div>
                    </Link>
                </div>
            </div>





            <div class="col-md-12 side_news dym-padding-right">
               <Link to="postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pb-3">
                            <div class="overlay">


                                <img  class="img-fluid" style={{height: 79}} src="img/megan.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg">
                            <p class="sub-news-para left-style">23 memorable outfits Meghan Markle has worn as a
                                duchess </p>
                            <p class="left-style">
                                <span class="source-style f-12">Insider ⋅ </span>
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


                                <img  class="img-fluid" style={{height: 79}} src="img/egg.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3 pt-3">
                            <p class="sub-news-para left-style">10 ways to cook an egg that you probably haven’t
                                thought of</p>
                            <p class="left-style">
                                <span class="source-style f-12">Jhon Baker ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>

                    </div>
                </Link>


               <Link to="postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom pb-3 pt-2">

                        <div class="col-12 col-xs-6 pt-2 pb-0">

                            <p class="sub-news-para left-style">Jinping’s words are far-reaching words did excellent</p>
                            <p class="left-style">
                                <span class="source-style f-12">The Daily Star ⋅ </span>
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


                                <img class="img-fluid" style={{height: 79}} src="img/flight.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">What to do when your flight is canceled</p>
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


                                <img class="img-fluid" style={{height: 79}} src="img/trailor.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">7 great movies you can watch on Netflix this weekend
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
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom pb-3 pt-2">

                        <div class="col-12 col-xs-6 pt-2 pb-0">

                            <p class="sub-news-para left-style">Jinping’s words are far-reaching words did excellent</p>
                            <p class="left-style">
                                <span class="source-style f-12">The Daily Star ⋅ </span>
                                <span class="time-style f-12">150 Reviews ⋅</span>
                                <span class="time-style f-12">12 hours age</span>
                            </p>
                        </div>
                    </div>
                </Link>

                <div class="row mb-home-sub-lead no-gutters home-sub-lead">

                    <div class="col-12 col-xs-6 pt-3 pb-0">

                        <p class="sub-news-para left-style">Barca excellent as ever!</p>
                    </div>
                    <div class="col-md-12 pb-3 border-bottom">
                        <div class="row-image">
                            <div class="column-image">
                                <img src="img/2.jpg" style={thumbnailimage} alt="Snow" />
                            </div>
                            <div class="column-image">
                                <img src="img/barca.jpg" style={thumbnailimage} alt="Forest" />
                            </div>
                            <div class="column-image">
                                <img src="img/2.jpg" style={thumbnailimage} alt="Mountains"/>
                            </div>
                        </div>
                    </div>
                </div>


               <Link to="postdetails">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img  class="img-fluid" style={{height: 79}} src="img/debi.jpg" alt=""/>
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



               <Link to="postdetails2">
                    <div class="row mb-home-sub-lead no-gutters home-sub-lead border-bottom">

                        <div class="img col-4 col-xl-4 col-lg-3 col-md-4 col-sm-2 col-xs-6 pt-3 pb-3">
                            <div class="overlay">


                                <img  class="img-fluid" style={{height: 79}} src="img/mash.jpg" alt=""/>
                            </div>
                        </div>

                        <div class="col-8 col-xl-8 col-lg-9 col-md-8 col-sm-10 col-xs-6 img-content light-bg pt-3">
                            <p class="sub-news-para left-style">Mash wants power play from all.
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


                                <img  class="img-fluid" style={{height: 79}} src="/img/avengers.jpg" alt=""/>
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



                <button class="btn btn-outline-dark  col-md-12">
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
}

 
  
