import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {

        return (
            <div className="section-share section-about">
                <div className='section-about-header'>
                    Truyen thong noi ve chian95
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" 
                            src="https://www.youtube.com/embed/ZzZmgZ5WW0o"
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Các bạn muốn video ra nhanh thì đừng quên Đăng Ký Kênh, Like, Share và Comment bên dưới video để mình có thêm động lực làm video nha. Cảm ơn các bạn nhiều 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}



//frameBorder="0"

//allowFullScreen>
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
