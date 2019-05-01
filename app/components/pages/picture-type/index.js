/**
 * Author: DuongHan
 * Created: 4/2/19
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import dataFields from './fields';
import ActionBtn from './ActionBtn';

class PictureTypePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.onFetchAllType();
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.picTypeList) {
      debugger;
      return {
        data: {
          ...dataFields,
          rows: nextProps.picTypeList.map(pictureType => ({
            id: pictureType.id,
            name: pictureType.name,
            number: pictureType.number,
            status: (
              <Chip
                color="primary"
                icon={
                  pictureType.isShow ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )
                }
                label={pictureType.isShow ? 'Hiển thị' : 'Không hiển thị'}
              />
            ),
            action: <ActionBtn type={pictureType} />,
          })),
        },
      };
    }
    return null;
  }

  render() {
    return (
      <Grid container style={{ flexGrow: 1 }} spacing={16}>
        <Grid item xs={12}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  {this.state.data.columns.map(column => (
                    <TableCell>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.data.rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.number}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

PictureTypePage.propTypes = {
  onFetchAllType: PropTypes.func,
};

ActionBtn.propTypes = {
  type: PropTypes.object.isRequired,
};

export default PictureTypePage;
