import 'semantic-ui-css/semantic.min.css';
import 'prismjs/themes/prism.css';
import './src/styles/global.scss';

/* global woopra */

export const onRouteUpdate = ({ location }, options) => {
  if (typeof woopra !== 'undefined') {
    if (options && options.debug) {
      console.log('woopra.track() called');
    }
    // On every route change fire this code!!
    woopra.track();
  }
};
