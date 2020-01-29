import React from 'react';
import Profile from '../Profile';
import NavHeader from '../../Components/NavHeader';
import {Switch, Route} from 'react-router-dom';
import FarmersTable from '../../Components/FarmersTable';

const Home = () => {
    return (
        <div className="bg-grey-100">
            <NavHeader />
            <div style={{ top: 80, left: 290 }} className="absolute w-4/5 bg-grey-100">
            <Switch>
                 <Route exact path='/' component={FarmersTable} />
                 <Route exact path='/profile' component={Profile} />
            </Switch>
            </div>
        </div>
    )
}

export default Home;