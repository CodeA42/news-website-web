import React from 'react';

import ArticleList from '../article/List';

const getArticleList = async (perPage, offset) => {
    try {
        const res = await fetch('http://localhost:2345/articles/')
        const articles = await res.json();

        return <ArticleList articles={articles}/>;
    } catch(e) {
        console.error(e);
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ArticleList: [],
        }
    }

    async componentDidMount() {
        const ArticleList = await getArticleList();
        this.setState({...this.state, ArticleList})
    }

    render() {
        return(
            <ul>{this.state.ArticleList}</ul>
        )
    }
}

export default Home;