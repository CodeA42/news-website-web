import React, {useState, useEffect} from 'react';

import ArticleList from '../article/List';

function Home() {
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        async function fetchArticleList(perPage, offset){
            try {
                const res = await fetch('http://localhost:2345/articles/')
                const articles = await res.json();
        
                setArticleList(<ArticleList articles={articles}/>);
            } catch(e) {
                console.error(e);
            }
        }
        fetchArticleList();
    }, []);
    
    return(
        <ul>{articleList}</ul>
    )
}

export default Home;