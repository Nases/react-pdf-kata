import React from 'react'
import { pdf } from '@react-pdf/renderer'
import { Document, Page } from 'react-pdf'


import pdfjs from 'pdfjs-dist'
import PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker()


class PDFViewer extends React.Component {
  state = {
    loading: true,
    document: null
  }

  componentDidMount() {
    this.renderDocument(this.props.document)
  }

  componentWillReceiveProps(newProps) {
    // Don't update if document didn't change
    if (this.props.document === newProps.document) return

    this.renderDocument(newProps.document)
  }

  renderDocument = doc => {
    if (!doc) {
      this.setState({ document: null })
      return
    }

    this.setState({ loading: true })

    // pdf(doc).toBlob().then(value => console.log(value))

    try {
      pdf(doc)
        .toBlob()
        .then(blob => {
          const url = URL.createObjectURL(blob)

          if (this.props.onUrlChange) {
            this.props.onUrlChange(url)
          }

          this.setState({ document: url, loading: false })
        })
    } catch (error) {
      this.props.onRenderError && this.props.onRenderError(error.message)
    }
  }


  render() {
    return (
      <Document file={this.state.document} onLoadSuccess={this.onDocumentLoad} {...this.props}>
        <Page renderMode="svg" pageNumber={1} />
      </Document>
    )
  }
}

PDFViewer.defaultProps = {
  document: null
}

export default PDFViewer
