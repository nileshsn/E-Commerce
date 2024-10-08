import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Discover a world of convenience and variety at ShopEase, your ultimate destination for online 
                shopping. We offer a wide range of products from electronics and fashion to home essentials and personal care. 
                With top-notch customer service, secure payments, and fast delivery, ShopEase ensures a seamless shopping experience.
                </p>
                <p>
                Join our community of satisfied customers and experience the best in online shopping. 
                Shop smart, shop easy, with ShopEase!
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;
