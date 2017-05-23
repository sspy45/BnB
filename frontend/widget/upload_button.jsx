import React from 'react';

export default class UploadButton extends React.Component {
  constructor(){
    super();

    this.upload = this.upload.bind(this);
    this.postImage = this.postImage.bind(this);
  }

  upload(){
    event.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, results) => {
          if (!error) {
            this.postImage(results[0].url);
          }
        }
    );
  }

  render(){
    return(
      <button onClick={this.upload}>
        Upload Image
      </button>
    );
  }
}
