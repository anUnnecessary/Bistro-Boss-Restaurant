import React from 'react';
import featuredImg from '../../assets/home/featured.jpg';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-red-700 pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-80 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-gray-950">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Welcome to the Bistro Baking!  <br />
                        Where culinary delights abound! Prepare to tantalize your taste buds with our extensive selection of delectable foods. From savory starters to mouthwatering mains, and from irresistible desserts to freshly baked bread, we have something to satisfy every craving.
                        <br />
                        Indulge in the rich flavors of our carefully crafted appetizers, featuring a fusion of international cuisines. Our mains are a symphony of culinary mastery, showcasing a diverse range of dishes that will transport you to culinary bliss. Each bite will leave you craving more as you savor the harmonious blend of flavors and textures.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;