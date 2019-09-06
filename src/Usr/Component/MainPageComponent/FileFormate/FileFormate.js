import React, { Component } from 'react';
import '../SecureAndConfidential/Secure.css';

class FileFormate extends Component {
	render() {
		return (
			<React.Fragment>
				<header>
					<div class="owl-carousel owl-theme">
						<div class="item">
							<img
								src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
								alt="images not found"
							/>
							<div class="cover">
								<div class="container">
									<div class="header-content">
										<div class="line" />

										<h1>Files supported</h1>
										<b><h3 style={{color:'white'}}>
											AIFF/AIF | AMR | AVI | CAF | DSS | DVD | DVF | M4A | MOV | MP2 | MP3 | MP4 |<br />
											<br /> MSV | Quicktime | WAV | Webex | WMA | WMV{' '}
										</h3></b>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</React.Fragment>
		);
	}
}
export default FileFormate;
