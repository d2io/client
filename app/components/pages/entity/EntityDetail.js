/**
 * Author: DuongHan
 * Created: 5/10/19
 * https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// core components
import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import Card from 'base/components/Card/Card';
import CardHeader from 'base/components/Card/CardHeader';
import CardBody from 'base/components/Card/CardBody';
import styles from 'components/styles/table';

class EntityDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={editor => {
                  console.log('Blur.', editor);
                }}
                onFocus={editor => {
                  console.log('Focus.', editor);
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

EntityDetailPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(EntityDetailPage);
