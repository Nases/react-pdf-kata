import React from 'react'
import Repl from '../src/components/Repl'
import initialCode from 'raw-loader!../examples/page-wrap.txt'


const ReplPage = () => {
  return (
    <Repl value={initialCode} activeTab='pdf' />
  )
}


export default ReplPage
