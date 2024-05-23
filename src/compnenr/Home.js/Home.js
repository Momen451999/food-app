import React, { Fragment } from 'react';
import Header from './Header';
import './Home.css';
import pridemig from './../../assets/2.gp.png';
import ingredients from './../../assets/3.gp.png';
import Data from '../Data';
import { Carousel, ExampleCarouselImage } from 'react-bootstrap';
import item1 from './../../assets/11.jp_files/11.jp.jpg'
import item2 from './../../assets/11.jp_files/22.jp.jpg'

const Home = () => {
    const blogitem = Data.map((item) => {
        return (
            <div className='col-md-4'>
                <div className='box'>
                    <img src={item.img} />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button><a href='#'>Order Now</a></button>
            </div>
        )
    })
    return (
        <Fragment>
            <Header />
            <section className='numbers'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h2>1289+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>4289+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1759+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className='col-md-3'>
                            <h2>1452+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={pridemig} title='pridemig' />

                        </div>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href='#'>learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button>
                                <a href='#'>learn more</a>
                            </button>
                        </div>
                        <div className='col-md-6'>
                            <img src={ingredients} alt='ingredients' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='paralex'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>When a man's stomach is full it makes no<br /> difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br /> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href='#'>Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blogs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div className='row'>
                        {blogitem}
                    </div>
                </div>
            </section>
            <section className='slider'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <img src={item1} />
                                    <Carousel.Caption>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        <h5>First slide label</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={item2} />
                                    <Carousel.Caption>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <h5>Second slide label</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className='motion'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <h2>Frequently Asked Questions</h2>
                            <p><h5>~ Is Foodera Bread really baked fresh each day?</h5>
                                Far far away, behind the word mountains, far<br />
                                from the countries Vokalia and Consonantia,<br />
                                there live the blind texts. Separated they live <br />
                                in Bookmarksgrove right at the coast of the<br />
                                Semantics, a large language.

                                <h5>~ Do you bake breads containing animal fats or products?</h5>
                                Far far away, behind the word mountains, far <br />
                                from the countries Vokalia and Consonantia, <br />
                                there live the blind texts. Separated they live <br />
                                in Bookmarksgrove right at the coast of the <br />
                                Semantics, a large language.

                                <h5>~ Can I order your products online?</h5>
                                Far far away, behind the word mountains, far <br />
                                from the countries Vokalia and Consonantia, <br />
                                there live the blind texts. Separated they live <br />
                                in Bookmarksgrove right at the coast of the <br />
                                Semantics, a large language.

                                <h5>~ When are you opening a shop near me?</h5>
                                Far far away, behind the word mountains, far <br />
                                from the countries Vokalia and Consonantia, <br />
                                there live the blind texts. Separated they live <br />
                                in Bookmarksgrove right at the coast of the <br />
                                Semantics, a large language.</p>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}


export default Home;