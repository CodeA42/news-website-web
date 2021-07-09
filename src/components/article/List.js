import React from 'react';

import Card from './Card';

const ArticleList = (props) => {
    const CardElements = props.articles.map(e =>
        <Card key={e._id} article={e}/>
    )
    return (
        <ul>{CardElements}</ul>
    )
}

export default ArticleList;