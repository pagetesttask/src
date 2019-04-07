import React, { Component} from 'react';
import HeadlineH2 from '../UI/Headlines/HeadlineH2';
import Description from '../UI/Description/Description';
import InputMask from 'react-input-mask';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {getPositions, postUser} from '../../store/actions/user'
import PopUp from './PopUp/PopUp'
 

class SignUp extends Component {

	constructor(props) {
		super(props);
		 this.state = {
            name: '',
            email: '',
            phone: '',
            photo: '',
            selectedId: '',
            errorName: '',
            errorEmail: '',
            errorPhone: '',
            errorPhoto: '',
            validated: false,
        }
	}

componentDidMount() {
    this.props.getPositions();

}

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

    handlePhone = (e) => {
    	let errorPhone = '';
        this.setState({
            phone: e.target.value.replace(/[{(_)}]/g, '').replace(/\s/g, '')
        });
        if(this.state.phone.length <= 11){
        	errorPhone= "Введите корректный номер телефона"
        	this.setState({errorPhone})	
        }if(this.state.phone.length === 12){
         errorPhone = ''
         this.setState({errorPhone})
        }
        
    };

    handleChange = (e) => {
        this.setState({ 
        	selectedId: e.target.value });
    };
// handleChanges = (selectedId) => {
//         this.setState({ 
//         	selectedId });
//     };


	photoSize = (e) => {
		if (e.target.files[0].size > 5e+6) {
			console.log("размер изображения не должен превышать 5 мб");

			this.setState({
				photo: ''
			})
		} else {
				console.log(e.target.height)
				this.setState({
						photo: e.target.value,
						file: e.target.files[0]
				})
		}
};

_isNameValid=(name)=> {
	let errorName = '';
	if(name === '') {
		errorName = 'Поле не может быть пустым';
		this.setState({errorName});
		return false
	}
	if(name.length < 2) {
		errorName = 'Длинна должна быть не меньше 3х символов';
		this.setState({errorName})
		return false
	}
	this.setState({errorName})
	return true
}

_isEmailValid=(email)=> {
	let errorEmail = '';
	if(email === '') {
		errorEmail = 'Поле не может быть пустым';
		this.setState({errorEmail})
		return false
	}
	this.setState({errorEmail})
	return true
}

isFormValid =()=>{
		return this._isNameValid(this.state.name) && this._isEmailValid(this.state.email)
	}	


handleSubmit(event) {
	event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    this.setState({ validated: true });
        
    if(this.isFormValid()) {

		console.log("successful")
    	var formData = new FormData();
    	formData.append ('name', this.state.name);
        formData.append ('email', this.state.email);
        formData.append ('phone', this.state.phone);
        formData.append ('position_id', this.state.selectedId);
        formData.append ('photo', this.state.file);
        this.props.postUser(formData)  
    }
  }

	render() {
		const options = this.props.positions.map((item)=>{
			return {label: item.name, value: item.id}
		})
		const {isSearchable,  validated, name, email, phone, selectedId, photo } = this.state;
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
				<Form
        className="form needs-validation"
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
     		 >
					<div className="row justify-content-center">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="form-block">

								<input type="text" 
								id="name"
								className="form-control"
								onChange={this.handleName}
								value={this.state.name} 
								errors={this.state.errorName}
								placeholder="Your name"
								required/>

								<label htmlFor="name" className="form__desc">Name</label>
								{this.state.errorName}
							</div>
							
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="form-block">
							<input type="email" 
							 id="exampleInputEmail1" aria-describedby="emailHelp"
							className="form-control"
							value={this.state.email}
							placeholder="Your email" 
							onChange={this.handleEmail}
							errors={this.state.errorEmail}
							required/>
							<span className="form__desc">Email</span>
							{this.state.errorEmail}
						</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="form-block">

         		<InputMask mask="+38 (099) 999 99 99" 
	         		placeholder="+38 (0__) ___ __ __"
							maskChar={'_'} 
							value={this.state.phone} 
							id="phone"
							className="form-control"
							name="phone" 
							onChange={this.handlePhone}
							beforeMaskedValueChange={this.beforeMaskedValueChange}
							required
						/>
         <span className="form__desc">Phone</span>
         {this.state.errorPhone}
       </div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
							<div className="form-block">
							<select 
									id="validationCustom01"
									value={this.state.selectedId}
									 onChange={this.handleChange}
									className="form-control  custom-select-lg form__select"
									required
								>
								<option disabled value=''> Choose a position </option>
									{this.props.positions.map((item)=>{
										return (<option value={item.id} key={item.name}>{item.name}</option>)
									})}
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							<div className="form-block">
							<fieldset className="form-control">
								<input type="file" 
								id="file" 
								className="form__input form__input--file"
								value={this.state.photo}
								onChange={this.photoSize}
								required/>
								<label className="input__label" htmlFor="file">Upload</label>
								<label className=" input__label--file" htmlFor="file">
									<span className="icon-upload"></span>
								</label>
								{this.state.photo === '' ? <span id="file-name" className="file__name">Upload your photo</span> :
							<span id="file-name" className="file__name">{this.state.photo.replace(/\\/g, '/').split('/').pop()}</span>}
  						</fieldset>
  						<span className="file__desc">File format jpg  up to 5 MB, the minimum size of 70x70px</span>
  						</div>
  				
							</div>
					</div>
			
          <div className="row justify-content-center">
          <button type="submit" 
          className={!(name && email && phone && photo && selectedId) ? 
          'btn btn-gray' : 'btn btn-primary' }>Sign Up</button>
    		</div>
			</Form>
			<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

      		</div>
			</div>
			{/*<PopUp/>*/}
		</section>
		);
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
