/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 * Author: DuongHan
 * Created: 3/28/19
 *
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './styles.css';
import messages from '../../messages';

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  onFilesAdded = evt => {
    if (this.props.disabled) return;
    const { files } = evt.target;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  };

  onDragOver = evt => {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ hightlight: true });
  };

  onDragLeave = () => {
    this.setState({ hightlight: false });
  };

  onDrop = event => {
    event.preventDefault();

    if (this.props.disabled) return;
    const { files } = event.dataTransfer;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  };

  fileListToArray = list => {
    const array = [];
    for (let i = 0; i < list.length; i += 1) {
      array.push(list.item(i));
    }
    return array;
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <CloudUploadIcon />
        <span className="mt-2">
          <FormattedMessage {...messages.dnd} />
        </span>
      </div>
    );
  }
}

Dropzone.propTypes = {
  disabled: PropTypes.bool,
  onFilesAdded: PropTypes.func,
};

export default Dropzone;
