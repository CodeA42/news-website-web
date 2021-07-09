import React, {useState, useEffect} from 'react';

import ArticleList from '../article/List';

// class Home extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             ArticleList: [],
//         }
//     }

//     async componentDidMount() {
//         const ArticleList = await getArticleList();
//         this.setState({...this.state, ArticleList})
//     }

//     render() {
//         return(
//             <ul>{this.state.ArticleList}</ul>
//         )
//     }
// }

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
    }, [articleList]);
    return(
        <ul>{articleList}</ul>
    )
}

export default Home;