import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import Loader from '../../constant/ui/Loader';
import { formatAddress } from '../../utils/formatAddress';
import "./index.scss";

const Profile = (props) => {
    const {
        match: { params: userId = '' } = {},
        userDetails = {},
        loader = '',
        error = ''
    } = props;

    useEffect(() => {
        if (userId)
            props.searchUserInfo(userId.userId);
    }, []);
    return (<div className="profile">{
        loader && !error ? <Loader /> : error ? <div>
                <p>Oops!! Internet is not working</p>
             <Button basic color='green' onClick={() => window.location.reload()} >Reload </Button>
             </div>
             :
            <div className="container-parent">

                <div className="container">
                    <div className="container-head">
                        <div className="menu">
                            <p>___ <br />___<br />___</p>
                        </div>
                    </div>
                    <div className="container-body">
                        <div className="profile-picture">
                            <img src="https://i.imgur.com/LhjDdJN.jpg" />
                        </div>
                        <div className="name">
                            <p>{userDetails.name}</p>
                        </div>
                        <div className="location">
                            <p>{formatAddress(userDetails.address)}</p>
                        </div>
                        <br />
                        <div className="stats">
                            <div className="followers">
                                <p>Mobile</p>
                                <span>{userDetails.phone}</span>
                            </div>
                            <div className="following">
                                <p>Email</p>
                                <span>{userDetails.email}</span>
                            </div>

                            <div className="topics">
                                <p>Website</p>
                                <span>{userDetails.website}</span>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
    }
    </div>

    )
};

Profile.propTypes = {
    user: PropTypes.array.isRequired,
    loader: PropTypes.bool.isRequired,
    userDetails: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired
}

export default Profile;

