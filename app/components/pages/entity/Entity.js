/**
 * Author: DuongHan
 * Created: 5/10/19
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Chip from '@material-ui/core/Chip/index';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

// core components
import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import Table from 'base/components/Table';
import ActionButton from 'base/components/Table/ActionButton';
import Card from 'base/components/Card/Card';
import CardHeader from 'base/components/Card/CardHeader';
import CardBody from 'base/components/Card/CardBody';
import styles from 'components/styles/table';

import dataFields from './fields';

class EntityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.props.onFetchEntity(this.props.match.params.entity);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.entities) {
      return {
        data: {
          ...dataFields,
          rows: nextProps.entities.map(entity => ({
            id: entity.id,
            name: entity.name || entity.title,
            number: entity.number,
            status: (
              <Chip
                color={entity.isShow ? 'primary' : 'action'}
                icon={
                  entity.isShow ? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )
                }
                label={entity.isShow ? ' Hiển thị' : ' Không hiển thị'}
              />
            ),
            action: <ActionButton type={entity} path={nextProps.match.url} />,
          })),
        },
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.entity !== prevProps.match.params.entity) {
      this.props.onFetchEntity(this.props.match.params.entity);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Sản phẩm</h4>
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

EntityPage.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object.isRequired,
  onFetchEntity: PropTypes.func.isRequired,
};

export default withStyles(styles)(EntityPage);
