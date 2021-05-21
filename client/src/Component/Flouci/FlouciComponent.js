import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';

const FlouciComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://developers.flouci.com/static/main.js';
    // script.async = true;
    // script.class = 'flouci-button';
    // script.app = '1e89d7b6-dd7e-4e00-952d-d5b0694b9fa7';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <form action="./cath.html" method="get">
        <script
          src="https://developers.flouci.com/static/main.js"
          class="flouci-button"
          app="1e89d7b6-dd7e-4e00-952d-d5b0694b9fa7"
          data-amount="323232323"
          data-name="Maryoul"
          data-description="Maryoul flouci"
          data-image="https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/09_407044.jpg"
          data-id="TX12530"
          lang-key="en"
        ></script>
      </form>
    </div>
  );
};

export default FlouciComponent;
