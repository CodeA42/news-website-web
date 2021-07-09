import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

function Article(props) {
    const [article, setArticle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchArticle(id) {
            const res = await fetch(`http://localhost:2345/articles/${id}`);
            const article = await res.json();
        
            setArticle(article);
        }
        fetchArticle(id);
    }, [id]);

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </>
    )
}

export default Article;