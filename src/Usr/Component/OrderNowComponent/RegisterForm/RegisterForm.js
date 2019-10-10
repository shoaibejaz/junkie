import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {orderSignupAction} from "../../../Actions/OrderActionsBeforeLogin/OrderSignUp";
import {uploadFileActionBeforelogin} from "../../../Actions/OrderActionsBeforeLogin/UploadFileActionBeforeLogin";
import {makeOrderActionBeforeLogin} from "../../../Actions/OrderActionsBeforeLogin/OrderActionBeforeLogin";
import UploadFileClassBeforeLogin from "../../../BusinessLogics/ActionLogics/OrderLogicsBeforeLogin/BeforeLoginUploadFileClass";
import OrderClassBeforeLogin from "../../../BusinessLogics/ActionLogics/OrderLogicsBeforeLogin/OrderClassBeforeLogin";
import OrderSignupClass from "../../../BusinessLogics/ActionLogics/OrderLogicsBeforeLogin/OrderSignupClass";
import {getOrder , deleteOrder} from "../../../../LocalStorage/OrderLocalStorage";
import './Registerform.css';

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  let context = null;
class OrderNow extends Component {

	constructor(props) {
		super(props);
		context = this;
		this.state = {
			File: [],
			Duration:getOrder()._fileDuration?getOrder()._fileDuration: "",
			firstNextButton:true,
			loadingFile: false,
			  loadingOrder: false,
			  loadingSubmit:false,
			_TurnAroundTime: getOrder()._turnAroundTime ? getOrder()._turnAroundTime: 24,
			_NumberOFPersons: getOrder()._noOfSpeakers ? getOrder()._noOfSpeakers: 1,
		  _TimeStamp:12,
		  FilePath: getOrder()._filePath? getOrder()._filePath: "",
		  FileName: getOrder()._fileName?getOrder()._fileName:"",
		  FileSize: getOrder()._fileSize?getOrder()._fileSize:"",
		  TotalCost: getOrder()._totalCost? getOrder()._totalCost:"",
		  SecondDuration:getOrder()._secondsDuration?getOrder()._secondsDuration:"",
		  checked_T:   false,
		  checked_V:  false,
		  checked_TStatus:getOrder()._timeStamp ? getOrder()._timeStamp: false,
		  checked_VStatus:getOrder()._verbitam ? getOrder()._verbitam: false,
		  _FName: null,
		  _LName: null,
		  _Email: null,
		  _Password: null,
		  formValidity: false,
		  errors: {
			_FName: "",
			_LName: "",
			_Email: "",
			_Password: ""
		  }
		};
		this.handleCheckTimeStamping = this.handleCheckTimeStamping.bind(this);
    	this.handleCheckVerbatim = this.handleCheckVerbatim.bind(this);
	  }
	  handleCheckTimeStamping(e) {
		this.setState({
		  checked_T: e.target.checked
		});
		this.setState({
		  checked_TStatus: !this.state.checked_TStatus
		});
		// const TimeStampingCost = this.state.timeStampingCost;
		// const TotalCost = this.state.totalCost;
		// if (this.state.checked_TStatus === true) {
		//   this.setState({
		//     totalCost: +TotalCost + +TimeStampingCost
		//   });
		// } else if (this.state.checked_TStatus === false) {
		//   this.setState({
		//     totalCost: +TotalCost - +TimeStampingCost
		//   });
		// }
	  }
	  handleCheckVerbatim(e) {
		this.setState({
		  checked_V: e.target.checked
		});
		this.setState({
		  checked_VStatus: !this.state.checked_VStatus
		});
		// const VerbitamCost = this.state.verbitamCost;
		// const TotalCost = this.state.totalCost;
		// if (this.state.checked_VStatus === true) {
		//   this.setState({
		//     totalCost: +TotalCost + +VerbitamCost
		//   });
		// } else if (this.state.checked_VStatus === false) {
		//   this.setState({
		//     totalCost: +TotalCost - +VerbitamCost
		//   });
		// }
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
			$('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');
			previous_fs.show();
			current_fs.animate(
				{ opacity: 0 },
				{
					step: function(now, mx) {
						scale = 0.8 + (1 - now) * 0.2;
						opacity = 1 - now;
						current_fs.css({ left: 0 });
						previous_fs.css({ transform: 'scale(' + scale + ')', opacity: opacity });
					},
					duration: 800,
					complete: function() {
						current_fs.hide();
						animating = false;
					},
					easing: 'swing'
				}
			);
		});

		$('.submit').click(function() {
			return false;
		});
		var fileInput = document.getElementById("fileInput");
		fileInput.onchange = function() {
		  var file = fileInput.files[0];
		  var reader = new FileReader();
		  reader.onload = function() {
			var aud = new Audio(reader.result);
			aud.onloadedmetadata = function() {
			  context.setState({ Duration: aud.duration });
			  if (context.state.Duration) {
				context.handleFileUpload();
			  }
			};
		  };
		  reader.readAsDataURL(file);
		};
	};
	decrement=()=>{
	if(	this.state._NumberOFPersons>1){
		this.setState({_NumberOFPersons:this.state._NumberOFPersons-=1})
	}else{
		this.setState({_NumberOFPersons:1});
	}
		
	}
	handleFileUpload = () => {
		if (!this.state.loadingFile) {
		  this.setState(
			{
			  loadingFile: true
			},
			() => {
			  this.timer = setTimeout(() => {}, this.state.loadingFile === false);
			  this.props.uploadFileActionBeforelogin(
				new UploadFileClassBeforeLogin(
				  this.state.Duration
				),
				this.state.File,
				this
			  );
			}
		  );
		}
	  };
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
	
	 
	render() {
		const {errors} =this.state;
		const Order = getOrder();
		return (
			<div class="row" style={{marginTop:"7%"}}>
				<div class="col-md-12 col-md-offset-3">
					<form id="msform">
						{/* <ul id="progressbar">
							<li class="active">Step 1</li>
							<li>Step 2</li>
							<li>Step 3</li>
						</ul> */}

						<fieldset>
			
					<h2 class="fs-title">Upload Audio or vedio File</h2>
					<div class="box">
						<input
							type="file"
							accept=".mp3,.mp4,.mp2,.aiff,.aif,.amr,.avi,.caf,.dss,.dvd,.dvf,.m4a,.mov,.msv,.qt,.wav,.arf,.wma,.wmv"
							id="fileInput"
							onChange={e => {
								this.setState({ File: e.target.files });
							  }}
							  disabled={this.state.loadingFile || Order? Order._filePath:""}
							name="selectedFile"
							style={{ display: "none" }}
							class="inputfile inputfile-6"
							data-multiple-caption="{count} files selected"
							multiple
						/>
						<label disabled={this.state.loadingFile} style={{cursor:"pointer"}} for="fileInput">
							<span />
							
							<strong>
							{this.state.loadingFile && <i class="spinner-border" role="status" />}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
									<path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
								</svg>
								{this.state.loadingFile && <span>File is uploading</span>}
              {!this.state.loadingFile && <span>Upload File</span>} &hellip;
							</strong>
						</label>
					</div>
					<div style={{overflowX:"auto"}}>
					<table class="table table-bordered table-sm">
						<thead class="thead-dark">
							<tr>
								<th>File Name</th>
								<th>File Size</th>
								<th>File Length</th>
								<th>Cost</th>
							</tr>
						</thead>
						<tr>
						<td>
							{Order._fileName?
							<img 
							width="20px" 
							onClick={()=>{
								deleteOrder("OrderData");
								window.location.reload();
						}} 
							style={{cursor:"pointer"}} 
							src={require("../../../../image/cancelWarning.png")}
							 />
							:""}
              {Order._fileName?(Order._fileName):(
				  this.props.fileList._response === "got"
                ? (this.props.fileList._fileName)
                : ("example.mp4"))}
            </td>
            <td>
              {Order._fileSize?(Order._fileSize):(
				  this.props.fileList._response === "got"
                ? (this.props.fileList._fileSize)
                : ("0 B"))}
            </td>
            <td>
              {Order._fileDuration?(Order._fileDuration):(
				  this.props.fileList._response === "got"
                ? (this.props.fileList._duration)
                : ("00:00:00"))}
            </td>
            <td>
			$
              {Order._totalCost?(Order._totalCost):(
				  this.props.fileList._response === "got"
                ? (this.props.fileList._totalCost)
                : ("0"))}
            </td>
						</tr>
						{
							Order._filePath?(
								
							<React.Fragment>
							<tr>
								<td>Turn Around Time</td>
								<td  colspan="3">
									<div class="form-group" style={{ width: '130px' }}>
										<select class="form-control" value={this.state._TurnAroundTime} onChange={(e)=>this.setState({_TurnAroundTime:e.target.value})} id="sel1" style={{ width: '30' }}>
											
											<option value={24}>24 hour</option>
											<option value={2}>2 days</option>
											<option value={3}>3 days</option>
											<option value={1}>1 week</option>
										</select>
									</div>
								</td>
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
								<td colSpan="3">
						  <input
							id="checkbox_id_T"
							type="checkbox"
							checked={this.state.checked_TStatus}
							onChange={this.handleCheckTimeStamping}
						  />
						  <label htmlFor="checkbox_id_T">$0.15/mint</label>
						</td>
							</tr>
							<tr>
								<td>Verbitam</td>
								<td colSpan="3">
						  <input
							id="checkbox_id_V"
							type="checkbox"
							checked={this.state.checked_VStatus}
							onChange={this.handleCheckVerbatim}
						  />
						  <label htmlFor="checkbox_id_V">$0.15/mint</label>
						</td>
							</tr>
							</React.Fragment>
						):
							(this.props.fileList._response === "got"?
							
						<React.Fragment>
						<tr>
							<td>Turn Around Time</td>
							<td  colspan="3">
								<div class="form-group" style={{ width: '130px' }}>
									<select class="form-control" onChange={(e)=>this.setState({_TurnAroundTime:e.target.value})} value={this.state._TurnAroundTime} id="sel1" style={{ width: '30' }}>
										
										<option value={24}>24 hour</option>
										<option value={2}>2 days</option>
										<option value={3}>3 days</option>
										<option value={1}>1 week</option>
									</select>
								</div>
							</td>
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
										value={this.state._NumberOFPersons}
										name="qty"
									/>
									<span class="plus bg-dark" onClick={this.increment}>+</span>
								</td>
							</td>
						</tr>
						<tr>
							<td>Time Stamp</td>
							<td colSpan="3">
                      <input
                        id="checkbox_id_T"
                        type="checkbox"
                        checked={this.state.checked_TStatus}
                        onChange={this.handleCheckTimeStamping}
                      />
                      <label htmlFor="checkbox_id_T">$0.15/mint</label>
                    </td>
						</tr>
						<tr>
							<td>Verbitam</td>
							<td colSpan="3">
                      <input
                        id="checkbox_id_V"
                        type="checkbox"
                        checked={this.state.checked_VStatus}
                        onChange={this.handleCheckVerbatim}
                      />
                      <label htmlFor="checkbox_id_V">$0.15/mint</label>
                    </td>
						</tr>
						</React.Fragment>:"")}
					</table>
					</div>
							  <input
							  type="button"
							
							  onClick={() => {
								this.props.makeOrderActionBeforeLogin(
								  new OrderClassBeforeLogin(
									this.state.FilePath,
									this.state.FileName,
									this.state.FileSize,
									this.state._TurnAroundTime,
									this.state._NumberOFPersons,
									this.state.checked_TStatus,
									this.state.checked_VStatus,
									this.state.TotalCost,
									this.state.Duration,
									this.state.SecondDuration
								  ),
								  this
								);
							  }} 
							  name="next" class="next action-button" value="Next"/>
						</fieldset>
						<fieldset>
							<h2 class="fs-title">Authentication</h2>
						<Link to="/Login">	<button
								class="float-left"
								style={{ backgroundColor: '#292a2c', color: '#ffffff' }}
								type="button"
								name="next"
                                class="btn btn-sm"
                               
							>
								Existing Customer Login here?
							</button></Link>
							<div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      name="_FName"
                      onChange={this.handleChange}
                      class="form-control"
                      placeholder="First Name"
					  noValidate
					  disabled={this.state.loadingSubmit}
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
					  disabled={this.state.loadingSubmit}
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
					  disabled={this.state.loadingSubmit}
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
					  disabled={this.state.loadingSubmit}
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
				<div class="form-group">
                      <span style={{ fontSize: "11px", color: "red" }}>
                        {this.props.signUpMessage}
                      </span>
				</div>
				<input
								type="button"
								name="previous"
								class="previous action-button-previous"
								value="Previous"
							/>
							<button 
							disabled={this.state.loadingSubmit}
							onClick={()=>{
								if (!this.state.loadingSubmit) {
									this.setState(
									  {
										loadingSubmit: true
									  },
									  () => {
										this.timer = setTimeout(() => {}, this.state.loadingSubmit === false);
										this.props.orderSignupAction(
											new OrderSignupClass(
												this.state._Email,
												this.state._FName,
												this.state._LName,
												this.state._Password
											),
											this
										)
									  }
									);
								  }
								
							}}
							 class="action-button" 
							  >
								 {this.state.loadingSubmit && <i class="spinner-border" role="status" />}
                      {!this.state.loadingSubmit && <span>Submit</span>}
						</button>
						</fieldset>
						{/* <fieldset>
							<h2 class="fs-title">Order Complete</h2>
							
							<input
								type="button"
								name="previous"
								class="previous action-button-previous"
								value="Previous"
							/>
							<Link to={'/Dashboard'}><input type="button" name="submit" class="submit action-button" value="Submit" /></Link>
						</fieldset> */}
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state =>({
	fileList: state.MakeOrderReducerBeforeLogin.uploadFileList,
	signUpMessage: state.MakeOrderReducerBeforeLogin.orderSignUpMessage

})
export default connect(mapStateToProps,{ uploadFileActionBeforelogin, makeOrderActionBeforeLogin , orderSignupAction})(OrderNow);
