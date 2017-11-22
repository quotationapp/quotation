import React, { Component } from 'react';
import SideMenu from "../components/SideMenu";

class Privacy extends Component {

    componentDidMount() {
        document.body.classList.add('page');
    }

    componentWillUnmount() {
        document.body.classList.remove('page');
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-3 last-sm">
                    <h1>privacy policy.</h1>

                    <p>By accessing our Service you authorize us to use cookies in accordance with this Privacy Policy. If you do not agree that we use cookies in this manner, you must adjust your browser settings to not allow its use or access the page of this Service. Disabling the cookies we use may impact your experience.</p>

                    <h3>what are cookies?</h3>
                    <p>Cookies are files or information that can be stored on your computer (or other device connected to the Internet, such as smartphones or tablets) when you visit a site. A cookie usually contains the name of the site that originated it, the cookie's "lifetime" (that is, how long it will remain on your device), and a value, which is usually a randomly generated unique number.</p>

                    <h3>what kind of cookies do we use?</h3>
                    <p>Two types of cookies may be used in our Service – "session cookies" and "persistent cookies". Session cookies are temporary cookies that will remain on your device until you leave the page. A persistent cookie remains on your device until it is deleted (the time the cookie will remain on your device will depend on the lifetime of the particular cookie and your browser settings).</p>
                    <p>Some of the pages you visit may also collect information using pixel tags (also called clear gifs) that can be shared by third parties that directly support our promotional activities and website development. However, the information does not identify individuals, although they may be correlated to your personal information.</p>

                    <h1>disclaimer.</h1>

                    <p><strong>We do not guarantee the accuracy of the exchange rates used in this Service.</strong> You should always confirm the current rates before making transactions that may be affected by possible changes in the values. The values given herein are for informational purposes only and are subject to change without notice. Rates for actual transactions may vary and this Service does not offer to enter into any transaction of any displayed rate.</p>

                    <span>Last modified: November 5, 2017</span>
                </div>

                <SideMenu/>

            </div>
        );
    }
}

export default Privacy;
