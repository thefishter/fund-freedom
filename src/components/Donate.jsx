import React from 'react';

const Donate = (props) => {
  return (
    <div className="Donate">
      <p>The Connecticut Bail Fund accepts contributions by mail and online. Community Bonds, its parent organization, is a registered 501(c)(3) not-for-profit and donations are tax-deductible to the extent permitted by law. EIN 81-2912950. Checks should be made payable to Community Bonds, Inc. and mailed to the address below. Credit card donations via PayPal are also accepted through the link below.</p>

      <div className="DonateOptions">
        <div className="DonateColumn">
          <p>Community Bonds, Inc.
            <br/>36 High Street Apt 203
            <br/>New Haven, CT 06510
          </p>
        </div>
        <div className="DonateColumn">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="9YXAJ6YEZW8KY"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" disabled/>
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Donate
