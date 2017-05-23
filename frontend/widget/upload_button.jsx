import React from 'react';

export default class UploadButton extends React.Component {
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(props){
    event.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, results) => {
          if (!error) {
            this.props.postImage(results[0].url, this.props.id);
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
