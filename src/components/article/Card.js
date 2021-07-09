import React from 'react';

import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <h2>
            <Link to={`article/${props.article._id}`}>
                {props.article.title}
            </Link>
        </h2>
    )
}

export default Card;