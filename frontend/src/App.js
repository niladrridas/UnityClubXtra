import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={PostList} />
                    {/* Add more routes as needed */}
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
