/**
 * Author: DuongHan
 * Created: 3/25/19
 *
 */

import React, { memo } from 'react';
import axios from 'axios/index';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Dropzone from 'components/commons/dropzone';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from 'base/components/Button';
import FormControl from '@material-ui/core/FormControl';

import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import Card from 'base/components/Card/Card';
import CardHeader from 'base/components/Card/CardHeader';
import CardBody from 'base/components/Card/CardBody';

import messages from '../../messages';
import PictureInfo from './PictureInfo';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class PicturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgList: [], picType: '' };
  }

  uploadImages = () => {
    this.state.imgList.slice().map(img => {
      const imgData = new FormData();

      imgData.append('file', img.file);
      imgData.append('title', img.title);
      imgData.append('alt', img.alt);
      imgData.append('link', img.link);
      imgData.append('summary', img.summary);

      debugger;

      axios
        .post('/api/v1/picture/add', imgData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(JSON.stringify(err)));
    });
  };

  onFilesAdded = files => {
    const tmpImgList = files.map(file => ({
      file,
      title: file.name,
      alt: `${file.lastModified}_${file.name}`,
      link: `${file.lastModified}_${file.name}`,
      summary: `${file.lastModified}_${file.name}`,
    }));

    this.setState({
      imgList: tmpImgList,
    });
  };

  onRemove = index => {
    const newImgList = this.state.imgList
      .slice()
      .filter((img, i) => i !== index);

    this.setState({
      imgList: newImgList,
    });
  };

  onUpdateImageInfo = (index, newImgInfo) => {
    const newImgList = this.state.imgList
      .slice()
      .map((imgInfo, i) => (i === index ? newImgInfo : imgInfo));

    this.setState({
      imgList: newImgList,
    });
  };

  changePicType = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, picTypeList } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4>Hình ảnh</h4>
              <p>
                <FormattedMessage {...messages.uploadImg} />
              </p>
            </CardHeader>

            <CardBody>
              <GridContainer justify="center" alignItems="center">
                <GridItem xs={8} sm={12} md={8}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="picType">Loại hình ảnh</InputLabel>
                    <Select
                      value={this.state.picType}
                      onChange={this.changePicType}
                      inputProps={{
                        name: 'picType',
                        id: 'picType',
                      }}
                    >
                      {picTypeList.map(type => (
                        <MenuItem value={type.id}>{type.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {this.state.imgList.map((img, index) => (
                    <PictureInfo
                      index={index}
                      key={img.file.lastModified}
                      imgSrc={URL.createObjectURL(img.file)}
                      title={img.title}
                      alt={img.alt}
                      link={img.link}
                      summary={img.summary}
                      onRemove={this.onRemove}
                      updateImageInfo={this.onUpdateImageInfo}
                    />
                  ))}

                  {this.state.imgList.length === 0 && (
                    <Dropzone onFilesAdded={this.onFilesAdded} />
                  )}

                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                  >
                    <FormattedMessage {...messages.upload} />
                    <CloudUploadIcon className={classes.rightIcon} />
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

PicturePage.propTypes = {
  classes: PropTypes.object.isRequired,
  picTypeList: PropTypes.array,
};

export default memo(withStyles(styles)(PicturePage));
