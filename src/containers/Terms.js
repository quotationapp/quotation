import React, { Component } from 'react';

class Terms extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-xs-4 col-sm-3 last-sm">
                <h1>terms of use.</h1>
                <p>By using our Service, you are agreeing to these terms. Please read them carefully.</p>

                <h3>using our service.</h3>
                <p>You must follow any policies made available to you within the Service.</p>
                <p>Don’t misuse our Service. For example, don’t interfere with our Service or try to access them using a method other than the interface and the instructions that we provide. You may use our Service only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Service to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.</p>
                <p>Using our Service does not give you ownership of any intellectual property rights in our Service or the content you access. You may not use content from our Service unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Service. Don’t remove, obscure, or alter any legal notices displayed in or along with our Service.</p>
                <p>Our Service display some content that is not Quotation’s. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law. But that does not necessarily mean that we review content, so please don’t assume that we do.</p>
                <p>In connection with your use of the Service, we may send you service announcements, administrative messages, and other information. You may opt out of some of those communications.</p>
                <p>Some of our Service are available on mobile devices. Do not use such Service in a way that distracts you and prevents you from obeying traffic or safety laws.</p>

                <h3>exchange update.</h3>
                <p>The values presented in this Service are informative and updated several times every hour, but there will be no change in value during the weekends.</p>
                <p>We will always provide the date and time of the last update of the exchange rate that you are viewing. This way you will be sure that the value is as updated as possible.</p>

                <span>Last modified: November 5, 2017</span>
            </div>
            <nav className="col-xs-4 col-sm-1">
                <ul>
                    <li>
                        <a href="about.html">about</a>
                    </li>
                    <li>
                        <a href="privacy.html">privacy</a>
                    </li>
                    <li className="current-page">
                        <a href="terms.html">terms</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Terms;
