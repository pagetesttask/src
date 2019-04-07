import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import HeadlineH2 from '../UI/Headlines/HeadlineH2';
import Description from '../UI/Description/Description';
import {connect} from 'react-redux'
import {getPositions, postUser} from '../../store/actions/user'
import PopUp from './PopUp/PopUp'

const styles = theme => ({
  textField: {
    marginLeft: '0',
    marginRight: '0',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: '16px',
    margin: '0',
    width: '100%',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  input: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: '16px',
    paddingLeft: '4px',
    width: '100%',
    marginLeft: '0',
  },
  selectEmpty: {
    width: '100%',
    boxSizing: "border-box",
  },
});

class OutlinedTextFields extends React.Component {
  
  state = {
    name: '',
    email: '',
    phone: '',
    photo: '',
    selectedId: '',
    multiline: 'Controlled',
    error: false,
    errEmail: false,
    errPhone: false,
    errSelect: false,
    errPhoto: false,
    errorName: '',
    errorEmail: '',
    errorPhone: '',
    errorPhoto: '',
    errorSelect: '',
    labelWidth: 0,
    validated: false,
    popUp: false
  };

componentDidMount() {
  this.props.getPositions();
}

onClosePopUp = () => {
  this.setState({popUp: false})
}

handleChange = (e) => {
    this.setState({ 
     selectedId: e.target.value });
};

handlePhone = (e) => {
    this.setState({
        phone: e.target.value.replace(/[{(_)}]/g, '').replace(/\s/g, '')
    });
};

handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

handleEmail = (e) => {
    this.setState({
        email: e.target.value
    });
};

_isPhoneValid = (phone) => {
  let errorPhone = '';
  if(phone.length < 12){
    errorPhone= "Enter a valid phone number"
    this.setState({errorPhone, errPhone: true}) 
    return false
  }
  if(phone.length >= 12){
   errorPhone = ''
   this.setState({errorPhone, errPhone: false})
   return true
  }
  return true
};  

photoSize = (e) => {
  let errorPhoto = '';
    const [file] = e.target.files;
    if(file === ''){
      errorPhoto = 'Field cannot be empty'
      this.setState({errorPhoto, photo: '', errPhoto: true})
      return false
    }
    if (file.size > 5e+6) {
      errorPhoto = "image size should not exceed 5 MB"
      this.setState({errorPhoto, photo: '', errPhoto: true})
      return false
    } 
    if (file) {
      const img = new Image();
      img.onload = () => {
        const { naturalHeight, naturalWidth } = img;
      if(naturalWidth < 70 || naturalHeight < 70) {
         errorPhoto = "the image size should not be less than 70х70рх"
         this.setState({errorPhoto, photo: '', errPhoto: true})
         return false
        }
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(file);
    }
        this.setState({
            photo: e.target.value,
            file: e.target.files[0]
        })
        return true
  };

_isPhotoValid = (photo) => {
  let errorPhoto = '';
  if(photo === undefined){
    errorPhoto = 'Field cannot be empty'
    this.setState({errorPhoto, photo: '', errPhoto: true})
    return false
  }
  this.setState({errorPhoto,  errPhoto: false})
  return true
}

_isEmailValid = (email) => {
  let errorEmail = '';
  const pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  if(email === "") {
    errorEmail = 'Field cannot be empty';
    this.setState({errorEmail, errEmail: true});
    return false
  }
  if(!email.match(pattern)) {
    errorEmail = 'Enter a valid email';
    this.setState({errorEmail, errEmail: true})
    return false
  }
  this.setState({errorEmail, errEmail: false})
  return true
}

_isNameValid = (name) => {
  let errorName = '';
  if(name === '') {
    errorName = 'Field cannot be empty';
    this.setState({errorName, error: true});
    return false
  }
  if(name.length < 2) {
    errorName = 'The length must be at least 2 characters';
    this.setState({errorName, error: true})
    return false
  }
  if(name.length > 60){
    errorName = 'The length should be no more than 60 characters';
    this.setState({errorName, error: true})
    return false
  }
  this.setState({ errorName, error: false})
  return true
}

_isSelectValid = (selected) => {
  let errorSelect = '';
  
  if(selected === '') {
    console.log("select")
    errorSelect = 'Selected position';
    this.setState({errorSelect, selectedId: '', errSelect: true});
    return false
  }
  this.setState({errorSelect, errSelect: false});
  return true
}
 
isFormValid = () => {
  if(this._isNameValid(this.state.name) && this._isEmailValid(this.state.email) && this._isPhoneValid(this.state.phone) && this._isSelectValid(this.state.selectedId ) && this._isPhotoValid(this.state.file )) {
    return true
  }
}

postHandler (e) {
  e.preventDefault();
  if(this.isFormValid()) {
    console.log("success")
    if(document.documentElement.clientWidth < 992) {
      this.setState({popUp: true})
    }
    var formData = new FormData();
    formData.append ('name', this.state.name);
      formData.append ('email', this.state.email);
      formData.append ('phone', this.state.phone);
      formData.append ('position_id', this.state.selectedId);
      formData.append ('photo', this.state.file);
      this.props.postUser(formData)  
      this.setState({name: '',
                     email: '',
                     phone: '',
                     photo: '',
                     selectedId: ''
                  })
  }
}

  render() {
    const { classes } = this.props;
    const { name, email, phone, selectedId, photo, errorName, 
      errorEmail, errorPhone, error, errEmail, errPhone,
       errSelect, errPhoto, errorPhoto, errorSelect } = this.state;
    return (

      <section id="sign-up" className="sign-up">
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-8">

        <HeadlineH2 title="Register to get a work"/>
          <Description>Attention! After successful registration and alert,
            update the list of users in the block from the top
         </Description>
        </div>
        </div>    
      <form  className="form"
        noValidate autoComplete="off"
        onSubmit={e => this.postHandler(e)} 
      >
      <div className="row">

      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
       <div className="form-block">
         <TextField
            error={error}
            id="outlined-with-placeholder"
            label="Name"
            placeholder="Your name"
            className={classes.textField}
            onChange={this.handleName}
            value={name}
            margin="normal"
            variant="outlined"
               InputProps={{className: classes.input}}
             InputLabelProps={{
              shrink: true,
            }}
            fullWidth={true}
          />
          <p className="file__desc red">{errorName}</p>
        </div>
       
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
        <div className="form-block">
          <TextField
            error={errEmail}
            id="outlined-uncontrolled"
            label="Email"
            type="email"
            onChange={this.handleEmail}
            placeholder="Your email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputProps={{className: classes.input}}
             InputLabelProps={{
              shrink: true,
            }}
            fullWidth={true}
          />
         <p className="file__desc red">{errorEmail}</p>
        </div>
      </div>

      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
      <div className="form-block">
        <InputMask
          mask="+38 (099) 999 99 99"
          value={phone}
          onChange={this.handlePhone}
          className={classes.textField} 
        >
            {() => <TextField
                      id='outlined-with-placeholder'
                      label='Phone'
                      error={errPhone}
                      name='phone'
                      className={classes.textField}
                      margin="normal"
                      type="text"
                      placeholder="+38 (0__) ___ __ __"
                      variant="outlined"
                      fullWidth={true}
                      InputProps={{className: classes.input}}
                      InputLabelProps={{
                      shrink: true,
                       }}
                  />}
        </InputMask>
            <p className="file__desc red">{errorPhone}</p>
          </div>
        </div>
        </div>

        <div className="row">

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="form-block">
          <Select
            error={errSelect}
            value={selectedId}
            onChange={this.handleChange}
            className={classes.selectEmpty}
            displayEmpty
            IconComponent={props => {
              return (<span {...props} className="icon-caret-down icon-select"></span>)
              } 
            }
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
              />       
            }
          >
              <MenuItem style={{color:'#ef6c00'}} value="" disabled>
                Select your position 
              </MenuItem>

              {this.props.positions.map((item)=> {
                      return ( <MenuItem className='option'
                              key={item.id} 
                              value={item.id}>{item.name}</MenuItem>
                      )  
                    }
                    )
                  }
              
            </Select>
            <p className="file__desc red">{errorSelect}</p>
           </div> 
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="form-block">
                <TextField
                  error={errPhoto}
                  type="file"
                  id="file"
                  className="form__input"
                  onChange={this.photoSize}
                  variant="outlined"
                  value={photo}
                  fullWidth={true}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <label  className="input__label" htmlFor="file">Upload</label>
                        </InputAdornment>
                      ),
                    }}
                />
                
                <label className=" input__label--file" htmlFor="file">
                  <span className="icon-upload"></span>
                </label>
                {photo === '' ? <span id="file-name" className="file__name">Upload your photo</span> :
              <span id="file-name" className="file__name">{photo.replace(/\\/g, '/').split('/').pop()}</span>}
           
              <span className="file__desc">File format jpg  up to 5 MB, the minimum size of 70x70px</span>
              <p className="file__desc red">{errorPhoto}</p>
              </div>
        </div>
      </div>
      <div className="row justify-content-center">
          <button type="submit" 
          className={!(name && email && phone && photo && selectedId) ? 
          'btn btn-gray' : 'btn btn-primary' }>Sign Up</button>
        </div>
        {this.state.popUp ? <PopUp onClosePopUp={this.onClosePopUp}/> : null}
      </form>
    </div>
    </section>

    
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    positions: state.signUpUser.positions,
    token: state.signUpUser.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPositions: () => dispatch(getPositions()),
    postUser: (formData) => dispatch(postUser(formData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OutlinedTextFields));

// export default withStyles(styles)(OutlinedTextFields);

