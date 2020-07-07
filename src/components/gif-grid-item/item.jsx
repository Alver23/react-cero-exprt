import React from "react";
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => (
    <div className="card animate__animated animate__fadeIn">
        <p>{title}</p>
        <img src={url} alt={title} />
    </div>
);

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GifGridItem;
