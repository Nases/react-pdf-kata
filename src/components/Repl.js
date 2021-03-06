import { useState } from 'react'
import { Document, Page, Text } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'
const PDFViewerWithNoSSR = dynamic(import('./PDFViewer'), { ssr: false })


const TestPDF = ({ inputValue }) => {
  return (
    <Document>
      <Page>
        <Text>{inputValue}</Text>
        <Text>asdsssadsas</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asdasdsada</Text>
      </Page>
    </Document>
  )
}

const Repl = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <PDFViewerWithNoSSR document={<TestPDF inputValue={inputValue} />} />
    </>
  )
}


export default Repl
