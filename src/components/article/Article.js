import React from 'react';

import { withRouter } from 'react-router-dom';

async function getArticleData(id) {
    const res = await fetch(`http://localhost:2345/articles/${id}`);
    const article = await res.json();

    return article;
}

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {},
        }
    }

    async componentDidMount() {
        const article = await getArticleData(this.props.match.params.id)
        this.setState({...this.state, article})
    }

    render() {
        return (
            <>
                <h1>{this.state.article.title}</h1>
                <p>{this.state.article.body}</p>
            </>
        )
    }
}

export default withRouter(Article);