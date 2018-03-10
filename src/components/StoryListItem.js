import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { updateStory, deleteStory, fetchSingleStory, showError } from '../actions';

class StoryListItem extends Component {

 state = {
    openDelete: false,
    openPublish: false
  };


  openPublishDialog = () => this.setState({openPublish: true});

  closePublishDialog = () => this.setState({openPublish: false});

  openDeleteDialog = () => this.setState({openDelete: true});

  closeDeleteDialog = () => this.setState({openDelete: false});

  deleteStoryConfirm = () => {
    this.setState({openDelete: false});
    const storyId = this.props.story._id;
    this.props.deleteStory(storyId);
  };

  publishStoryConfirm = () => {
    this.setState({openPublish: false});
    const storyId = this.props.story._id;
    const data = this.props.story.published ? {published: false} : {published: true};
    if (this.props.story.events.length === 0) {
      this.props.showError('This story has not events yet (add one to publish)');
      return;
    }
    this.props.publishStory(storyId, data);
  };

  renderEditButton = () => {
    return (
      <RaisedButton
        label='Edit'
        primary={true}
        className='Buttons'
        href={`/me/editstory/${this.props.story._id}`}
      />
    )
  };

  renderDeleteButton = () => {
    const actionsDelete = [
      <RaisedButton
        label="Cancel"
        primary={true}
        className='Buttons'
        onClick={this.closeDeleteDialog}
      />,
      <RaisedButton
        label="Delete"
        primary={true}
        className='Buttons'
        onClick={this.deleteStoryConfirm}
      />,
    ];
    return (
      <div>
        <RaisedButton
          label='Delete'
          onClick={(e) => {
            e.preventDefault();
            this.setState({openDelete: true});;
          }}
          primary={true}
          className='Buttons'
          >
          <Dialog
            title="Are you sure you want to delete?"
            actions={actionsDelete}
            modal={true}
            open={this.state.openDelete}
            contentClassName="dialogs"
          >
            Story cannot be restored later
          </Dialog>
        </RaisedButton>
      </div>
    )
  }

  renderPublishButton = () => {
    const published = this.props.story.published ? 'Unpublish' : 'Publish';
    const dialogTitle = this.props.story.published ?
     'Are you sure you want to unpublish?' :
     'Are you sure you want to publish?';
    const actionsPublish = [
      <RaisedButton
        label="Cancel"
        primary={true}
        className='Buttons'
        onClick={this.closePublishDialog}
      />,
      <RaisedButton
        label="Confirm"
        primary={true}
        className='Buttons'
        onClick={this.publishStoryConfirm}
      />,
    ];
    return (
      <RaisedButton
        label={published}
        onClick={(e) => {
          e.preventDefault();
          this.setState({openPublish: true});;
        }}
        primary={true}
        className='Buttons'
        >
        <Dialog
          title={dialogTitle}
          actions={actionsPublish}
          modal={true}
          open={this.state.openPublish}
          contentClassName="dialogs"
        >
        </Dialog>
      </RaisedButton>
    )
  }

  renderButtons = () => {
    if (window.location.href.match('me/stories') !== null) {
      return (
        <div className='ButtonsRender'>
          {this.renderEditButton()}
          {this.renderDeleteButton()}
          {this.renderPublishButton()}
        </div>
      )
    }
  }

  renderStoryAssets = () => {
    const { title, tagLine, editor, _id } = this.props.story ? this.props.story : null;
    const editorInfo = this.props.editors[editor];
    return (
      <div className="ListItemPaper">
        <div className="ListItemDescription">
          <a href={`/story/${_id}`}>
            <p>{title}</p>
            <p>{tagLine}</p>
            {this.props.renderEditor ? <p><small>by {editorInfo.name}</small></p> : null }
          </a>
        </div>
        <div className='Buttons'>
          {this.renderButtons()}
        </div>
      </div>
    )
  }

  render() {
   const style = {
      height: 80,
      width: '100%'
    };
    return (
      <div className="StoryListItem">
        <Paper className="Paper"
          style={style}
          zDepth={1}
          children={this.renderStoryAssets()}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editors: state.entities.editors,
});

const mapDispatchToProps = (dispatch) => ({
  publishStory: (storyId, data) => dispatch(updateStory(storyId, data)),
  deleteStory: (storyId) => dispatch(deleteStory(storyId)),
  getStory: (storyId) => dispatch(fetchSingleStory(storyId)),
  showError: (errorMessage) => dispatch(showError(errorMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryListItem);
