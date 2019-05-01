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
import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import { FormattedMessage } from 'react-intl';
import Input from 'base/components/Input';
import messages from '../../messages';

class PictureInfo extends React.Component {
  constructor(props) {
    super(props);

    debugger;
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

    this.props.updateImageInfo(this.props.index, {
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Card style={{ flexGrow: 1, padding: 20 }}>
        <GridContainer>
          <GridItem xs={4} sm={4} md={4}>
            <img
              src={this.props.imgSrc || 'https://i.imgur.com/Fu5Ffo4.jpg'}
              alt={this.state.alt}
              height={200}
            />
          </GridItem>

          <GridItem xs={8} sm={8} md={8}>
            <Input
              labelText="Tiêu đề"
              name="title"
              inputProps={{
                value: this.state.title,
              }}
              onChange={this.handleChange}
              id="title"
              formControlProps={{
                fullWidth: true,
                icon: 'pencil-alt',
                type: 'text',
              }}
            />
            <Input
              labelText="Alt"
              name="alt"
              inputProps={{
                value: this.state.alt,
                icon: 'puzzle-piece',
                type: 'text',
              }}
              onChange={this.handleChange}
              id="alt"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <Input
              labelText="Đường dẫn"
              name="link"
              inputProps={{
                value: this.state.link,
                icon: 'link',
                type: 'email',
              }}
              onChange={this.handleChange}
              id="link"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <Input
              labelText="Thông tin"
              name="summary"
              inputProps={{
                value: this.state.summary,
                icon: 'info-circle',
                type: 'text',
              }}
              onChange={this.handleChange}
              id="summary"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        </GridContainer>

        <GridContainer direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="danger"
              onClick={() => this.props.onRemove(this.props.index)}
            >
              <FormattedMessage {...messages.delete} /> <DeleteIcon />
            </Button>
          </Grid>
        </GridContainer>
      </Card>
    );
  }
}

PictureInfo.propTypes = {
  alt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  index: PropTypes.number,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateImageInfo: PropTypes.func,
};

export default PictureInfo;
