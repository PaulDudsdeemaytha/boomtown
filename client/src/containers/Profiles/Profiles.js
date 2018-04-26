import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Gravatar from 'react-gravatar';

import {
    Card,
    CardActions,
    CardHeader,
    CardText,
    CardTitle,
    CardMedia
} from 'material-ui/Card';

// styles for paper
const styles = {
    height: 250,
    width: 800,
    margin: 'auto',
    marginTop: 40,
    marginBottom: 40
};

const Profiles = props => {
    const item = this.props;
    return (
        <div>
            <Paper style={styles} zDepth={1}>
                <Card>
                    <CardTitle
                        // title={props.profileInfo.fullname}
                        // subtitle={props.profileInfo.bio}
                        className={'profile-header'}
                    />
                    <CardText>
                        <CardTitle
                            className={'items-data'}
                            // title={props.itemInfo.length}
                            subtitle="Items Shared"
                        />
                        <CardTitle
                            title={'0'}
                            className={'items-data'}
                            subtitle={'Items Borrowed'}
                        />
                    </CardText>
                    <Gravatar
                        // email={props.profileInfo.email}
                        className={'profile-avatar'}
                        size={200}
                    />
                </Card>
            </Paper>
        </div>
    );
};

export default Profiles;
