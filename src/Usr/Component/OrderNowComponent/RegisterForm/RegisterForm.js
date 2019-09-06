import React, { Component } from 'react';
// import './Form'
import $ from 'jquery';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {SignUpAction} from "../../../Actions/AuthActions/SignUpAction";
import SignUpClass from "../../../BusinessLogics/ActionLogics/AuthLogics/SignUpClass";
// import {findDOMNode} from 'react-dom'
import './Registerform.css';


const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors, ...rest) => {
	let valid = true;
	Object.values(errors).forEach(val => val.length > 0 && (valid = false));
	console.log(valid);
  
	// Object.values(rest).forEach(val => {
	//   val === null && (valid = false);
	// });
  
	return valid;
  };

class Niofox extends Component {

	constructor(props) {
		super(props);
		// this.addNotification = this.addNotification.bind(this);
		// this.notificationDOMRef = React.createRef();
		this.state = {
		  _TurnAroundTime:12,
		  _NumberOFPersons:1,
		  _TimeStamp:12,
		  _FName: null,
		  _LName: null,
		  _Email: null,
		  _Password: null,
		  formValidity: false,
		  // _ConfirmPassword: null,
		  errors: {
			_FName: "",
			_LName: "",
			_Email: "",
			_Password: ""
			// _ConfirmPassword: ""
		  }
		};
	  }
	componentDidMount = () => {
		//Counter
		// $(document).ready(function() {
		// 	$('.count').prop('disabled', true);
		// 	$(document).on('click', '.plus', function() {
		// 		$('.count').val(parseInt($('.count').val()) + 1);
		// 	});
		// 	$(document).on('click', '.minus', function() {
		// 		$('.count').val(parseInt($('.count').val()) - 1);
		// 		if ($('.count').val() == 0) {
		// 			$('.count').val(1);
		// 		}
		// 	});
		// });
		//Counter
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale; //fieldset properties which we will animate
		var animating; //flag to prevent quick multi-click glitches

		$('.next').click(function() {
			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			next_fs = $(this).parent().next();

			//activate next step on progressbar using the index of next_fs
			$('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

			//show the next fieldset
			next_fs.show();
			//hide the current fieldset with style
			current_fs.animate(
				{ opacity: 0 },
				{
					step: function(now, mx) {
						//as the opacity of current_fs reduces to 0 - stored in "now"
						//1. scale current_fs down to 80%
						scale = 1 - (1 - now) * 0.2;
						//2. bring next_fs from the right(50%)
						left = now * 50 + '%';
						//3. increase opacity of next_fs to 1 as it moves in
						opacity = 1 - now;
						current_fs.css({
							transform: 'scale(' + scale + ')',
							position: 'absolute'
						});
						next_fs.css({ left: left, opacity: opacity });
					},
					duration: 800,
					complete: function() {
						current_fs.hide();
						animating = false;
					},
					//this comes from the custom easing plugin
					easing: 'swing'
				}
			);
		});

		$('.previous').click(function() {
			if (animating) return false;
			animating = true;

			current_fs = $(this).parent();
			previous_fs = $(this).parent().prev();

			//de-activate current step on progressbar
			$('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');

			//show the previous fieldset
			previous_fs.show();
			//hide the current fieldset with style
			current_fs.animate(
				{ opacity: 0 },
				{
					step: function(now, mx) {
						//as the opacity of current_fs reduces to 0 - stored in "now"
						//1. scale previous_fs from 80% to 100%
						scale = 0.8 + (1 - now) * 0.2;
						//2. take current_fs to the right(50%) - from 0%
						// left = ((1-now) * 50)+"%";
						//3. increase opacity of previous_fs to 1 as it moves in
						opacity = 1 - now;
						current_fs.css({ left: 0 });
						previous_fs.css({ transform: 'scale(' + scale + ')', opacity: opacity });
					},
					duration: 800,
					complete: function() {
						current_fs.hide();
						animating = false;
					},
					//this comes from the custom easing plugin
					easing: 'swing'
				}
			);
		});

		$('.submit').click(function() {
			return false;
		});
	};
	decrement=()=>{
	if(	this.state._NumberOFPersons>1){
		this.setState({_NumberOFPersons:this.state._NumberOFPersons-=1})
	}else{
		this.setState({_NumberOFPersons:1});
	}
		
	}
	increment=()=>{
		this.setState({_NumberOFPersons:this.state._NumberOFPersons+=1})
	}
	handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;
		let State = this.state;
	
		switch (name) {
		  case "_FName":
			errors._FName =
			  value.length < 3 ? "First Name must be 3 characters long!" : "";
			State._FName = value;
			break;
		  case "_LName":
			errors._LName =
			  value.length < 3 ? "Last Name must be 3 characters long!" : "";
			State._LName = value;
			break;
		  case "_Email":
			errors._Email = validEmailRegex.test(value)
			  ? ""
			  : "Email is not valid!";
			State._Email = value;
			break;
		  case "_Password":
			errors._Password =
			  value.length < 8 ? "Password must be 8 characters long!" : "";
			State._Password = value;
			break;
		  default:
			break;
		}
		this.setState({ errors, [name]: value });
		this.setState({ State, [name]: value });
	  };
	
	  handleSubmit = event => {
		event.preventDefault();
		if (validateForm(this.state.errors)) {
		  this.setState({ formValidity: true });
		  console.log(this.state.formValidity);
		} else {
		  this.setState({ formValidity: false });
		  console.log(this.state.formValidity);
		}
		// this.setState({ formValidity: false });
	  };
	render() {
		console.log(this.state._TurnAroundTime);
		const {errors} =this.state;

		return (
			<div class="row">
				<div class="col-md-12 col-md-offset-3">
					<form id="msform">
						<ul id="progressbar">
							<li class="active">Step 1</li>
							<li>Step 2</li>
							<li>Step 3</li>
						</ul>

						<fieldset>
			
					<h2 class="fs-title">Upload Photo or vedio File(s)</h2>
					{/* <h3 class="fs-subtitle">Tell us something more about you</h3> */}
					<div class="box">
						<input
							type="file"
							name="file-7[]"
							id="file-7"
							class="inputfile inputfile-6"
							data-multiple-caption="{count} files selected"
							multiple
						/>
						<label for="file-7">
							<span />{' '}
							<strong>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
									<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
								</svg>{' '}
								Choose a file &hellip;
							</strong>
						</label>
					</div>
					{/* //ProgressBar */}
					<div class="progress">
						<div
							class="progress-bar  active"
							role="progressbar"
							aria-valuenow="455"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ width: '80%' }}
						>
							<span class="skill-name">
								<strong>ASD.jpg</strong>
							</span>
						</div>
					</div>
					<br />
					{/* Table */}
					<table class="table table-bordered table-sm">
						<thead class="thead-dark">
							<tr>
								<th>File Name</th>
								<th>File Size</th>
								<th>File Length (in Minutes)</th>
								<th>Cost</th>
							</tr>
						</thead>
						<tr>
							<td>ASD.mp4</td>
							<td>3000kb</td>
							<td>0:40</td>
							<td>$29</td>
						</tr>
						<tr>
							<td class="table-secondary " colspan="4"><b>Sub Total</b></td>
						
						</tr>
						<tr>
							<td>Turn Around Time</td>
							<td  colspan="3">
								<div class="form-group" style={{ width: '130px' }}>
									<select class="form-control" onChange={(e)=>this.setState({_TurnAroundTime:e.target.value})} id="sel1" style={{ width: '30' }}>
										<option value={12}>12 hour</option>
										<option value={24}>24 hour</option>
										<option value={2}>2 days</option>
										<option value={3}>3 days</option>
									</select>
								</div>
							</td>
							{/*<td>0:40</td>
									<td>$29</td> */}
						</tr>
						<tr>
							<td>Number of Speaker</td>
							<td>
							
								<td class="qty mt-5" colspan="3">
									<span class="minus bg-dark" onClick={this.decrement}>-</span>
									<input
									
										style={{ height: '20px',width:'50px' }}
										type="number"
										onChange={(e)=>this.setState({_NumberOFPersons:e.target.value})}
										class="count input"
										name="qty"
										value={this.state._NumberOFPersons}
									/>
									<span class="plus bg-dark" onClick={this.increment}>+</span>
								</td>
							</td>
						</tr>
						<tr>
							<td>Time Stamp</td>
							<td colspan="3">
								<div class="form-group">
									<select class="form-control"  id="sel1" style={{ width: '130px' }}>
										<option>12 hour</option>
										<option>24 hour</option>
										<option>2 days</option>
										<option>3 days</option>
									</select>
								</div>
							</td>
						</tr>
					</table>
				
				
							<input type="button" name="next" class="next action-button" value="Next" />
						</fieldset>
						<fieldset>
							<h2 class="fs-title">Online Payment</h2>
						<Link to="/Login">	<button
								class="float-left"
								style={{ backgroundColor: '#292a2c', color: '#ffffff' }}
								type="button"
								name="next"
                                class="btn btn-sm"
                               
							>
								Existing Customer Login here?
							</button></Link>
							{/* <h3 class="fs-subtitle">Your presence on the social network</h3> */}
							<div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      name="_FName"
                      // onChange={e => this.setState({ _FName: e.target.value })}
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="First Name"
                      noValidate
                    />
                  </div>
                  <div class="input-group">
                    {errors._FName.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._FName}
                      </span>
                    )}
                  </div>
                </div>
				<div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      noValidate
                      name="_LName"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="input-group">
                    {errors._LName.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._LName}
                      </span>
                    )}
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="email"
                      noValidate
                      name="_Email"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="input-group">
                    {errors._Email.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._Email}
                      </span>
                    )}
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="password"
                      noValidate
                      name="_Password"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="input-group">
                    {errors._Password.length > 0 && (
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {errors._Password}
                      </span>
                    )}
                  </div>
                </div>
				<input
								type="button"
								name="previous"
								class="previous action-button-previous"
								value="Previous"
							/>
							<input type="button" name="next" class="next action-button" value="Next" />
						</fieldset>
						<fieldset>
							<h2 class="fs-title">Order Complete</h2>
							
							<input
								type="button"
								name="previous"
								class="previous action-button-previous"
								value="Previous"
							/>
							<Link to={'/Dashboard'}><input type="button" name="submit" class="submit action-button" value="Submit" /></Link>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{SignUpAction})(Niofox);
