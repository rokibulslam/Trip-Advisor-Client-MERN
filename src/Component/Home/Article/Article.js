import React from 'react';
import img1 from '../../../images/Pictures.png'
import './Article.css'
const Article = () => {
    return (
        <div className="article-bg p-5">
            <div className="container">
            <h1 className="p-5">What to expect when you fly</h1>
            <div className="row ">
                
                    <div className="col-md-6 col-sm-12">
                         <img className="img-fluid rounded" src={img1} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <h3>Keeping you safe</h3>
                    <p>Throughout your journey, we’re putting safety and cleanliness at the forefront of your travel experience as a part of our United CleanPlus℠ commitment.</p>
                    <button className="btn-success btn">Learn How</button>
                    </div>
                
            </div>
        </div>
        </div>
    );
};

export default Article;