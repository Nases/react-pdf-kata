import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useAsync } from 'react-use';
import { withRouter } from 'next/router';
import Loading from '../src/components/Loading';
import { decompress } from '../src/lib/compress';

const Repl = dynamic(import('../src/components/Repl'), { loading: Loading });

const ReplPage = ({ router, shareUrl }) => {
  const [code, setCode] = useState('');

  const [initialCode, setInitialCode] = useState('');

  const [activeTab, setActiveTab] = useState('pdf');

  const [documentUrl, setDocumentUrl] = useState(null);

  useAsync(async () => {

    setInitialCode(require('raw-loader!../examples/page-wrap.txt'));
  }, []);

  return (
    <Repl
      value={initialCode}
      activeTab={activeTab}
      onChange={setCode}
      onUrlChange={setDocumentUrl}
    />
  );
};

export default withRouter(ReplPage);
