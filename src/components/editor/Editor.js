import React, { useState, useEffect, useRef } from 'react';
import { environment as env } from '../../environments/env.dev';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HelpHeader from '../layouts/HelpHeader';
import { useStyles } from '../shared/styles';
import Container from '@material-ui/core/Container';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@material-ui/core/Button';

const Editor = () => {
  const [content, setContent] = useState(null);
  const editorRef = useRef();

  useEffect(() => {
    console.log(editorRef.current.editor.core);
  }, []);

  const classes = useStyles();

  const handleImageUpload=(targetImgElement, index, state, imageInfo, remainingFilesCount)=>{
  	console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
  }

  const handleImageUploadError=(errorMessage, result)=>{
  	console.log(errorMessage, result)
  }

  const handleContent=(content)=>{
    setContent(content);
  }

  return (
    <div className={classes.heroContent}>
      <HelpHeader />
      <Container maxWidth="md" component="header">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.typo}>
          Our rich text editor
        </Typography>
        <div>
          <div style={{textAlign: 'right'}}>
            <Button style={{
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 20,
              marginBottom: 20,
            }} variant="contained" color="primary">Save</Button>
          </div>

          <CKEditor
              ref={editorRef}
              editor={ ClassicEditor }
              data="<p>Hello from CKEditor 5!</p>"
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  handleContent(data);
                  console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
          />
        </div>
      </Container>
    </div>
  );
};

export default Editor;
