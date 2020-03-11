import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Loader from '../../constant/ui/Loader';
import Profile from '../../container/Profile';
import Table from '../../container/Table';
import "./index.scss";
import { Button, Flag } from 'semantic-ui-react';

const List = ({ user, loader, users, error, userDetails, ...props }) => {
    useEffect(() => {
        users();
    }, []);

    const userInfo = (userId) => {
        return props.history.push(`/user/${userId}`);
    }
    const { match = '' } = props;
    return (
        <div className="list spinner" style={{ padding: '25px' }}>
            {
                loader && !error ?
                    <Loader /> : error ? <div>
                        <p>Oops!! Internet is not working</p>
                        <Button basic color='green' onClick={() => window.location.reload()} >Reload </Button>
                    </div> :
                        <div>
                            <span className="heading">User Details</span>
                            <Table user={user} {...props} userInfo={userInfo} />
                        </div>
            }
            <Router>
                <Route
                    exact={true}
                    component={Profile}
                    path={`${match.url}/user/:userId/`}
                />
            </Router>

        </div>
    )
};

List.propTypes = {
    user: PropTypes.array.isRequired || [],
    loader: PropTypes.bool.isRequired || false,
    userDetails: PropTypes.object.isRequired || {},
    error: PropTypes.bool.isRequired || false
}

export default List;
