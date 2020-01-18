import React from 'react';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export default () => (
  <Layout>
    <SEO title="Contact" />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSclB77Az130LhNdgZeEgJG9pqsJpaeGx3epaZZfyPeJa6m8Xw/viewform?embedded=true"
      width="640"
      height="755"
      title="contact form"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      Loading…
    </iframe>
    <p style={{ fontStyle: 'italic' }}>
      (After form submission, scroll to top to confirm that message was sent.)
    </p>
  </Layout>
);
