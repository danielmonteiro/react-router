import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import lazyComponent from '../../hoc/lazyComponent';
import './Blog.css';

const LazyNewPost = lazyComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render () {

        return (
            <div>
                <header>
                    <nav className="Nav">
                        <ul>
                            <li>
                                <NavLink to="/posts">Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-post">New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts />} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={LazyNewPost} /> : null}                    
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
                
            </div>
        );
    }
}
/*
                <section>
                    <FullPost selectedPostId={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
*/
export default Blog;