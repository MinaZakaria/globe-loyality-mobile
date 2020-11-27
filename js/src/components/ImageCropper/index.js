import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import images from '../../../assets/images';
import GeneralButton from '../Buttons/GeneralButton';
import { LARGE } from '../../constants/views/buttonSizes';
import { DISABLED } from '../../constants/views/buttonTypes';

class ImageCropper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayImage()}
        <GeneralButton
          title={this.props.buttonName}
          onPress={this.onUploadImage}
          size={LARGE}
          type={DISABLED}
          icon={images.folder}
          iconStyle={styles.iconImage}
          titleStyle={styles.text}
          bodyStyle={styles.button}
        />
      </View>
    );
  }

  onUploadImage = () => {
    const { width, height, cropping, multiple } = this.props;

    ImagePicker.openPicker({
      width,
      height,
      cropping,
      multiple,
      includeBase64: true,
      mediaType: 'photo'
    }).then(croppedImage => {
      this.onChangeImage(`data:${croppedImage.mime};base64,${croppedImage.data}`);
    }).catch(() => { });
  }

  displayImage = () => {
    let uploadedImage = this.state.image ? this.state.image : this.props.defaultValue;
    return (
      <Image
        style={styles.image}
        source={uploadedImage ? { uri: uploadedImage } : images.default}
      />
    );
  }

  onChangeImage = image => {
    this.setState({ image: image }, this.props.onChangeImage(image));
  }
}

ImageCropper.defaultProps = {
  onChangeImage: () => { },
  defaultValue: null,
  width: 500,
  height: 500,
  cropping: true,
  multiple: true
};

ImageCropper.propTypes = {
  onChangeImage: PropTypes.func,
  defaultValue: PropTypes.string,
  buttonName: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  cropping: PropTypes.bool,
  multiple: PropTypes.bool
};

export default ImageCropper;
