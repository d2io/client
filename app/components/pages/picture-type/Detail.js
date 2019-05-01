/**
 * Author: DuongHan
 * Created: 4/4/19
 *
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from 'base/components/Button';

class PictureTypeDetail extends React.Component {
  getActionType = () =>
    new URLSearchParams(this.props.location.search).get('action');

  render() {
    const { type } = this.props.location.state;

    return (
      <Grid>
        <Paper style={{ padding: 20 }}>
          <h4>Chi tiết loại hình ảnh</h4>

          <Table>
            <TableBody>
              <tr>
                <td>Tên loại hình ảnh: </td>
                <td>{type.name}</td>
              </tr>

              <tr>
                <td>SEO Uri:</td>
                <td>{type.nameAscii}</td>
              </tr>

              <tr>
                <td>SEO Title:</td>
                <td>{type.seoTitle}</td>
              </tr>

              <tr>
                <td>SEO Description:</td>
                <td>{type.seoDescription}</td>
              </tr>

              <tr>
                <td>SEO Keyword:</td>
                <td>{type.seoKeyword}</td>
              </tr>

              <tr>
                <td>Nhóm:</td>
                <td>{type.parent ? type.parent.id : 0}</td>
              </tr>

              <tr>
                <td>Số hiệu:</td>
                <td>{type.number}</td>
              </tr>

              <tr>
                <td>Hiển thị:</td>
                <td>
                  {
                    <Chip
                      color="primary"
                      icon={
                        type.isShow ? <VisibilityIcon /> : <VisibilityOffIcon />
                      }
                      label={type.isShow ? 'Hiển thị' : 'Không hiển thị'}
                    />
                  }
                </td>
              </tr>

              <tr>
                <td>Ảnh loại hình ảnh:</td>
                <td>Cell</td>
              </tr>

              <tr>
                <td>Chi tiết loại hình ảnh:</td>
                <td>{type.name}</td>
              </tr>
            </TableBody>
          </Table>

          <Fragment>
            <Button floating color="primary">
              Cập nhật <EditIcon />
            </Button>
            <Button floating color="default">
              Xóa <DeleteIcon />
            </Button>
          </Fragment>
        </Paper>
      </Grid>
    );
  }
}

PictureTypeDetail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PictureTypeDetail;
