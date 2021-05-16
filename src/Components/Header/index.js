import React from 'react';
function Header(props) {
    console.log(props)
    const { PHONE ,LOGO_IMAGE } = props.parentContext.state.SUBDOMAIN_DATA;
    // alert(props.parentContext.state.SUBDOMAIN_DATA.PHONE)
    // const {SUBDOMAIN_DATA} = props;
    // alert(LOGO_IMAGE)
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span><img src={LOGO_IMAGE} width="200" height="50" /></span>
            <span className="h3">{PHONE}</span>
            </div>
        </nav>
    )
}
export default Header;