import React, { Component } from 'react';
import parse from 'html-react-parser';

class PolicyAgreement extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';

        const htmlData = `
            <div>
                <p><h2>RunForRent Policy Agreement</h2></p>
                <br>
                <p>This policy agreement (the "Agreement") outlines the terms and conditions under which RunForRent ("Company") will provide rental property and seller property services to its clients. Please read this Agreement carefully before accepting it. By accepting this Agreement, you agree to be bound by its terms and conditions.</p>
                
                <p><h4><b>Scope of Services</b></h4> <br>The Company will provide the following services to its clients: Finding and securing suitable rental and seller properties for clients, Assisting with any issue regarding this service.</p>
                
                <p><h4><b>Disclaimer of Warranties</h4></b><br> The Company makes no representations or warranties of any kind, express or implied, regarding the rental properties or the services provided under this Agreement. The Company shall not be liable for any damages or losses of any kind arising from or in connection with the use of the rental properties or the services provided under this Agreement.</p>
                
                <p><h4><b>Indemnification</h4></b><br> You agree to indemnify and hold the Company, its affiliates, and their respective officers, agents, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the rental properties or the services provided under this Agreement.</p>
                
                <p><h4><b>Governing Law This Agreement</h4></b><br> shall be governed by and construed in accordance with the laws of the Indian Constitution.</p>
                
                <p>By accepting this Agreement, you acknowledge that you have read and understood the terms and conditions outlined above and agree to be bound by them.</p>
                <p><h4><b>Camera Policy</h4></b><br>
                <p>Our app uses the camera on your device to provide the core functionality of our service. We do not collect or store any images or videos captured by the camera. The data captured by the camera is used only within the app and is not shared with any third parties. By using our app, you consent to the use of the camera on your device in accordance with this policy.</p>
                
                <p>We take the protection of your personal data very seriously and have implemented appropriate security measures to protect your information from unauthorized access, alteration, or destruction.</p>
                
                <p>If you have any questions or concerns about our privacy policy or the use of the camera in our app, please contact us at team@runforrent.com. We will be happy to provide additional information or address any issues you may have.</p>
                </p>
                <p>latest updated on 24 August 2023<br> SHUBHAM TIWARI (CEO)</p>
            </div>
        `;

        return parse(htmlData);
    }
}

export default PolicyAgreement;
