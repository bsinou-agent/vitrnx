import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../apiServer';

import MdEditor from '../../ui/MdEditor/MdEditor';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
// Material UI
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';

import classes from './EditPost.css';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

class EditPost extends Component {
    state = {
        id: '',
        date: '',
        path: '',
        title: '',
        author: '',
        tags: '',
        desc: '',
        body: '',
        createdOn: '',
        lastUpdatedOn: '',
        lastUpdatedBy: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };


    componentDidMount() {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        const cId = this.props.match.params.id;
        if (cId) {
            if (!this.state.loadedPost || this.state.loadedPost.path !== cId) {
                var options = { headers: { 'Authorization': this.props.token } };
                axios.get('/posts/' + cId, options).then(response => {
                    console.log(response.data)
                    this.setState({ ...response.data.post });
                });
            }
        }
    }

    postDataHandler = () => {
        const data = {

            // Read only for the time being 
            id: this.state.id,
            // date: this.state.date,
            // author: this.state.author, //  === '' ? this.state.currUserMail : this.state.author,
            // createdOn: this.state.createdOn,

            // Edited by user
            title: this.state.title,
            path: this.state.path,
            tags: this.state.tags,
            desc: this.state.desc,
            thumb: this.state.thumb,
            hero: this.state.hero,
            // MD rendering 
            body: this.state.body,

            // TODO rather inject here current user and date time
            // updatedOn: this.state.updatedOn,
            // updatedBy: this.state.updatedBy
        };

        // retrieve token from redux and pass it to axios
        var options = { headers: { 'Authorization': this.props.token } };

        console.log('### About to send post\n', data, options)

        axios.post('/posts', data, options).then(response => {
            console.log(response); // TODO Give feedback to the user 
            this.setState({ ...response.data.post });
        }).catch(err => {
            console.log(err); // TODO handle error?
        });
    }

    render() {
        return (
            <div className={classes.EditPost}>
                <button onClick={this.postDataHandler}>Save Post</button>
                <Tabs
                    // inkBarStyle={{background: 'pink'}}
                    onChange={this.handleChange}
                    value={this.state.slideIndex} >
                    <Tab label="Summary" value={0} />
                    <Tab label="Body" value={1} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}>
                    <div>
                        <TextField hintText="A title for your post" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} /><br />
                        <TextField hintText="a-nice-name-without-fantasy" value={this.state.path} onChange={(event) => this.setState({ path: event.target.value })} /><br />
                        <TextField hintText="Thumbnail image name" value={this.state.thumb} onChange={(event) => this.setState({ thumb: event.target.value })} /><br />
                        <TextField hintText="Hero image name" value={this.state.hero} onChange={(event) => this.setState({ hero: event.target.value })} /><br />
                        <TextField hintText="Some tags for your post" value={this.state.tags} onChange={(event) => this.setState({ tags: event.target.value })} /><br />
                        <TextField
                            hintText="A short desc of your post"
                            multiLine={true}
                            rows={2}
                            rowsMax={5}
                            value={this.state.desc}
                            onChange={(event) => this.setState({ desc: event.target.value })}
                        />
                    </div>
                    <div style={styles.slide}>
                        <MdEditor changed={(event) => this.setState({ body: event.target.value })}/>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        currUserMail: state.auth.email
    };
};

export default connect(mapStateToProps)(EditPost);
