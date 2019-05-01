/**
 * Author: DuongHan
 * Created: 3/25/19
 *
 */

import React, { memo } from 'react';
import axios from 'axios/index';
import { FormattedMessage } from 'react-intl';
import Dropzone from 'components/commons/dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from 'base/components/Button';
import Grid from '@material-ui/core/Grid';

import messages from '../../messages';
import PictureInfo from './PictureInfo';

class PicturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgList: [] };
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

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <p>
              <FormattedMessage {...messages.uploadImg} />
            </p>

            <select>
              <option>Chọn nhóm hình ảnh</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>

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

            <div>
              {this.state.imgList.length === 0 && (
                <Dropzone onFilesAdded={this.onFilesAdded} />
              )}

              <Button outline color="secondary" onClick={this.uploadImages}>
                <FormattedMessage {...messages.upload} />
                <CloudUploadIcon />
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default memo(PicturePage);
