import { useState, useEffect } from 'react'
import { pdf } from '@react-pdf/renderer'
import { Document, Page } from 'react-pdf'

import pdfjs from 'pdfjs-dist'
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker()


const PDFViewer = (props) => {
  const [loading, setLoading] = useState(true)
  const [document, setDocument] = useState(null)

  useEffect(() => {
    renderDocument(props.document)
  }, [props])

  const renderDocument = doc => {
    if (!doc) {
      setDocument(null)
      return
    }
    setLoading(true)
    try {
      pdf(doc).toBlob().then(blob => {
        const url = URL.createObjectURL(blob)
        if (props.onUrlChange) {
          props.onUrlChange(url)
        }
        setDocument(url)
        setLoading(false)
      })
    } catch (error) {
      props.onRenderError && props.onRenderError(error.message)
    }
  }

  return (
    <Document file={document} {...props}>
      <Page renderMode="svg" pageNumber={1} />
    </Document>
  )
}


export default PDFViewer
