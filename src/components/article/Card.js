import React from 'react';

const Card = (props) => {
    return (
        <h2>
            <a href={"article/" + props.article._id}>
                {props.article.title}
            </a>
        </h2>
    )
}

export default Card;