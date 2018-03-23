import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {

        console.log(this.props);

        axios
            .get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Daniel'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                this.setState({ error: true });
            });

    }

    postClickedHandler = (postId) => {
        //this.setState({ selectedPostId: postId })

        //this.props.history.push('/posts/' + postId);
        this.props.history.push({ pathname: '/posts/' + postId });
    }

    render () {

        let posts = this.state.posts.map(post => {
            return (
                //<Link to={'/posts/' + post.id} key={post.id}>
                    <Post key={post.id} title={post.title} author={post.author} postClicked={() => this.postClickedHandler(post.id)} />
                //</Link>
            )
        });

        if (this.state.error) {
            posts = <div style={{ textAlign: 'center' }}>Something get wrong</div>;
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }

}

export default Posts;