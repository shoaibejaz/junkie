import React, { Component } from 'react';
import './Order.css';
import $ from 'jquery';
import { getUserID } from "../../../../LocalStorage/UserIDLocalStorage";
import { displayAllOrdersAction } from "../../../Actions/DashBoardActions/DisplayAllOrdersAction";
import { displayRequestedOrdersAction } from "../../../Actions/DashBoardActions/DisplayRequestedOrdersAction";
import { displayConfirmedOrdersAction } from "../../../Actions/DashBoardActions/DisplayConfirmedOrdersAction";
import { displayDeliveredOrdersAction } from "../../../Actions/DashBoardActions/DisplayDeliveredOrdersAction";
import SendUserIDClass from "../../../BusinessLogics/ActionLogics/UserIdLogics/SendUserIDClass";
import { connect } from "react-redux";

class Services extends Component {
	state = {};
	componentDidMount = () => {
		$(document).ready(function() {
			$('.star').on('click', function() {
				$(this).toggleClass('star-checked');
			});

			$('.ckbox label').on('click', function() {
				$(this).parents('tr').toggleClass('selected');
			});

			$('.btn-filter').on('click', function() {
				var $target = $(this).data('target');
				if ($target != 'all') {
					$('.table tr').css('display', 'none');
					$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
				} else {
					$('.table tr').css('display', 'none').fadeIn('slow');
				}
			});
		});
	};
	render() {
		return (
			<React.Fragment>

				<div class="container-fluid" style={{ marginTop: '40px' }}>
					<h2>Manage Sales</h2>
					<div class="col-md-12 col-md-offset-2">
						<div class="panel panel-default">
							<div class="panel-body">
								<div>
									<div class="btn-group">
										<button style={{borderRadius:"5px"}} onClick={()=>this.props.displayAllOrdersAction(new SendUserIDClass(getUserID()))} class="btn btn-filter btn-radius" data-target="all">
											All Orders
										</button>&nbsp;
										<button style={{borderRadius:"5px"}} onClick={()=>this.props.displayRequestedOrdersAction(new SendUserIDClass(getUserID()))} class="btn btn-filter btn-radius" data-target="pagado">
											Requested Task
										</button>&nbsp;
										<button
											onClick={()=>this.props.displayConfirmedOrdersAction(new SendUserIDClass(getUserID()))}
											class="btn btn-filter btn-radius"
											data-target="pendiente"
											style={{borderRadius:"5px"}}
										>
											Confirmed Order
										</button>&nbsp;
										<button style={{borderRadius:"5px"}} onClick={()=>this.props.displayDeliveredOrdersAction(new SendUserIDClass(getUserID()))}  class="btn btn-filter btn-radius" data-target="cancelado">
											Delivered Order
										</button>&nbsp;
									</div>
								</div>
								<div class="table-container">
									<table class="table table-filter">
										<tbody>
											<tr data-status="pagado">
												<td />
												<td>
													<a href="javascript:;" class="star">
														<i class="glyphicon glyphicon-star" />
													</a>
												</td>
												<td>
													<div class="media">
														<div class="media-body">
															<span class="media-meta pull-right">Febrero 13, 2016</span>
															<h4 class="title">
																Audio Wall
																<span class="pull-right pagado">Requested Task</span>
																<span
																
																	class="btn btn-info btn-lg"
																	data-toggle="modal"
																	data-target="#myModal"
																	class="pull-right pagado"
																>
																	Attached Files
																	<div class="modal fade" id="myModal" role="dialog">
																		<div class="modal-dialog">
																			<div class="modal-content">
																				<div class="modal-header" />
																				<div class="modal-body">
																					<a>Some text in the modal.</a>
																					
																				</div>
																				<div class="modal-footer">
																					<button
																						type="button"
																						class="btn btn-default"
																						data-dismiss="modal"
																					>
																						Close
																					</button>
																				</div>
																			</div>
																		</div>
																	</div>
																</span>
															</h4>
															<p class="summary">I want this task to be completed.</p>
														</div>
													</div>
												</td>
											</tr>
											<tr data-status="pendiente">
												<td />
												<td>
													<a href="javascript:;" class="star">
														<i class="glyphicon glyphicon-star" />
													</a>
												</td>
												<td>
													<div class="media">
														<div class="media-body">
															<span class="media-meta pull-right">Febrero 13, 2016</span>
															<h4 class="title">
																Lorem Impsum
																<span class="pull-right pendiente">Confirmed</span>
															</h4>
															<p class="summary">
																Ut enim ad minim veniam, quis nostrud exercitation...
															</p>
														</div>
													</div>
												</td>
											</tr>
											<tr data-status="cancelado">
												<td />
												<td>
													<a href="javascript:;" class="star">
														<i class="glyphicon glyphicon-star" />
													</a>
												</td>
												<td>
													<div class="media">
														<div class="media-body">
															<span class="media-meta pull-right">Febrero 13, 2016</span>
															<h4 class="title">
																Lorem Impsum
																<span class="pull-right cancelado">Delivered</span>
															</h4>
															<p class="summary">
																Ut enim ad minim veniam, quis nostrud exercitation...
															</p>
														</div>
													</div>
												</td>
											</tr>
											<tr data-status="pagado" class="selected">
												<td />
												<td>
													<a href="javascript:;" class="star star-checked">
														<i class="glyphicon glyphicon-star" />
													</a>
												</td>
												<td>
													<div class="media">
														<div class="media-body">
															<span class="media-meta pull-right">Febrero 13, 2016</span>
															<h4 class="title">
																Lorem Impsum
																<span class="pull-right pagado">Requested</span>
															</h4>
															<p class="summary">
																Ut enim ad minim veniam, quis nostrud exercitation...
															</p>
														</div>
													</div>
												</td>
											</tr>
											<tr data-status="pendiente">
												<td />
												<td>
													<a href="javascript:;" class="star">
														<i class="glyphicon glyphicon-star" />
													</a>
												</td>
												<td>
													<div class="media">
														<div class="media-body">
															<span class="media-meta pull-right">Febrero 13, 2016</span>
															<h4 class="title">
																Lorem Impsum
																<span class="pull-right pendiente">Confirmed</span>
															</h4>
															<p class="summary">
																Ut enim ad minim veniam, quis nostrud exercitation...
															</p>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	allOrders: state.UserDashboardReducer.allUserOrdersList,
	requestedOrders: state.UserDashboardReducer.requestedUserOrdersList,
	confirmedOrders: state.UserDashboardReducer.confirmedUserOrdersList,
	deliveredOrders: state.UserDashboardReducer.deliveredUserOrdersList
  });

export default connect(mapStateToProps,{displayAllOrdersAction,
    displayRequestedOrdersAction,
    displayConfirmedOrdersAction,
    displayDeliveredOrdersAction})( Services);
