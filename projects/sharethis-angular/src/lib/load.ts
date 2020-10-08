declare global {
  interface Window {
    onShareThisLoaded: () => void;
    __sharethis__: any;
  }
}

export default function (component, product) {
  // load config
  let config = component.config || { enabled: true };
  config = JSON.parse(JSON.stringify(config));

  // load buttons
  const _onShareThisLoaded = window.onShareThisLoaded;

  let onload: any = () => {
    if (!onload.complete) {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      if (component.buttons) {
        component.buttons.id = config.id;
        window.__sharethis__.load(product, config);
      }
      if (_onShareThisLoaded) {
        _onShareThisLoaded();
      }
      onload.complete = true;
    }
  };

  window.onShareThisLoaded = onload;

  // load sharethis.js
  if (document.getElementById('sharethis-js')) {
    if (window.__sharethis__) {
      window.onShareThisLoaded();
    }
  } else {
    const script = document.createElement('script');
    script.setAttribute('id', 'sharethis-js');
    const params = {
      property: config.property || '',
      product: product,
      source: 'reactjs',
    };
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    script.src = 'https://platform-api.sharethis.com/js/sharethis.js?' + query;
    script.async = true;
    document.body.appendChild(script);
  }
}
