/**
 * Author: DuongHan
 * Created: 5/10/19
 * https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// @material-ui/core components
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// core components
import GridItem from 'base/components/Grid/GridItem';
import GridContainer from 'base/components/Grid/GridContainer';
import Card from 'base/components/Card/Card';
import CardHeader from 'base/components/Card/CardHeader';
import CardBody from 'base/components/Card/CardBody';
import styles from 'components/styles/table';

const useStyles = makeStyles(theme => ({
  ...styles,
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function EntityDetailPage() {
  const classes = useStyles();

  const [values, setValues] = useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sản phẩm</h4>
            <p className={classes.cardCategoryWhite}>Mô tả</p>
          </CardHeader>

          <CardBody>
            <form className={classes.root} autoComplete="off">
              <TextField
                id="outlined-title"
                label="Tiêu đề bài viết"
                defaultValue="foo"
                fullWidth
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />

              <TextField
                id="outlined-title"
                label="SEO Uri"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <TextField
                id="outlined-title"
                label="SEO Title"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <TextField
                id="outlined-title"
                label="SEO Description"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Loại bài viết
                </InputLabel>
                <Select
                  value={values.age}
                  onChange={handleChange}
                  autoWidth
                  input={
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-title"
                label="Sản phẩm liên quan"
                defaultValue="foo"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />

              <CKEditor
                editor={ClassicEditor}
                className={classes.textField}
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
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

EntityDetailPage.propTypes = {
  classes: PropTypes.object,
};

export default EntityDetailPage;
