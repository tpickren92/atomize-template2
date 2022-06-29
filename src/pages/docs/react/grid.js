import React from "react"

import ContainerDocs from "../../../components/grid-components/ContainerDocs"
import RowColDocs from "../../../components/grid-components/RowColDocs"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import DocsWrapper from "../../../components/common/DocsWrapper"

const Grid = () => (
  <Layout>
    <SEO
      title="Grid Components"
      description="Grid components of Atomize Design System - Container, Row, Column."
    />
    <DocsWrapper>
      <ContainerDocs />
      <RowColDocs />
    </DocsWrapper>
  </Layout>
)

export default Grid
