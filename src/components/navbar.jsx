import React, { Component } from 'react';

class NavBar extends Component{
	state = {
		lists: ['All Offers', 'Food & Drinks']
	}
	render(){
		return (
			<React.Fragment>



			<div class="container-fluid">
		    	<div class="row">
			        <nav class="navbar navbar-default">
            			<div class="container-fluid">
			                <div class="navbar-header">
			                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
			                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			                        <span class="sr-only">Toggle navigation</span>
			                        <span class="icon-bar"></span>
			                        <span class="icon-bar"></span>
			                        <span class="icon-bar"></span>
			                    </button>
			                    <a class="navbar-brand" href="{{url('/')}}">
			                        <img src="https://s3-ap-southeast-1.amazonaws.com/royalty-bd/static-images/icon/rbd_logo_beta.png"
			                             alt="RoyaltyBD" />
			                    </a>
                			</div>

							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                    <ul class="nav navbar-nav">
			                        <li class="dropdown">
			                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
			                               aria-haspopup="true" aria-expanded="false">OFFERS<span class="caret"></span></a>
			                            <ul class="dropdown-menu">
			                            	{this.state.lists.map(list => 
			                            		<li key={list}> <i class="fa fa-cutlery d-icon"></i>{ list }</li>
			                            	)}
			                            </ul>
			                        </li>
			                    </ul>
		                    </div>


            			</div>
           			</nav>
                </div>
            </div>




			</React.Fragment>
		)
	}
}

export default NavBar;