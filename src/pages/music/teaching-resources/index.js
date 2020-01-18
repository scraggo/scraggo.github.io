import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

const markdown = `# Teaching Resources

_coming soon..._
`;

export default () => {
  return (
    <Layout>
      <SEO title="Music Teaching Resources" />
      <div className="text-wrapper">
        <ReactMarkdown source={markdown} />
      </div>
    </Layout>
  );
};
