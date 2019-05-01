/**
 * Author: DuongHan
 * Created: 4/2/19
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

// core components
import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import Table from 'base/components/Table';
import Card from 'base/components/Card/Card';
import CardHeader from 'base/components/Card/CardHeader';
import CardBody from 'base/components/Card/CardBody';
import styles from 'components/styles/table';

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
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Kiểu hình ảnh</h4>
              <p className={classes.cardCategoryWhite}>Mô tả</p>
            </CardHeader>

            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={this.state.data.columns.map(column => column.label)}
                tableData={this.state.data.rows.map(row => [
                  row.id,
                  row.name,
                  row.number,
                  row.status,
                  row.action,
                ])}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

PictureTypePage.propTypes = {
  classes: PropTypes.object,
  onFetchAllType: PropTypes.func,
};

ActionBtn.propTypes = {
  type: PropTypes.object.isRequired,
};

export default withStyles(styles)(PictureTypePage);
