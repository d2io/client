/**
 * Author: DuongHan
 * Created: 3/28/19
 *
 */
import PropTypes from 'prop-types';
import React from 'react';
import Card from 'base/components/Card/Card';
import Button from 'base/components/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import Input from 'base/components/Input';
import messages from '../../messages';

class PictureInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title || '',
      alt: this.props.alt || '',
      link: this.props.link || '',
      summary: this.props.summary || '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    this.props.updateImageInfo(this.props.reducers, {
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Card style={{ flexGrow: 1 }}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <img
              src={this.props.imgSrc || 'https://i.imgur.com/Fu5Ffo4.jpg'}
              alt={this.state.alt}
              height={200}
            />
          </Grid>

          <Grid item xs={8}>
            <div>
              <Input
                labelText="Tiêu đề"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                icon="pencil-alt"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <Input
                labelText="Alt"
                name="alt"
                value={this.state.alt}
                onChange={this.handleChange}
                icon="puzzle-piece"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <Input
                labelText="Đường dẫn"
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                icon="link"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <Input
                labelText="Thông tin"
                name="summary"
                value={this.state.summary}
                onChange={this.handleChange}
                icon="info-circle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="danger"
              onClick={() => this.props.onRemove(this.props.reducers)}
            >
              <FormattedMessage {...messages.delete} /> <DeleteIcon />
            </Button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

PictureInfo.propTypes = {
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  reducers: PropTypes.object,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateImageInfo: PropTypes.func,
};

export default PictureInfo;
