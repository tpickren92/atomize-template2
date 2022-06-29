import React from "react"

import DivDocs from "../../../components/atoms/DivDocs"
import TextDocs from "../../../components/atoms/TextDocs"
import IconDocs from "../../../components/atoms/IconDocs"
import ButtonDocs from "../../../components/atoms/ButtonDocs"
import InputDocs from "../../../components/atoms/InputDocs"
import CheckboxDocs from "../../../components/atoms/CheckboxDocs"
import RadioboxDocs from "../../../components/atoms/RadioboxDocs"
import SwitchDocs from "../../../components/atoms/SwitchDocs"
import ImageDocs from "../../../components/atoms/ImageDocs"
import TagDocs from "../../../components/atoms/TagDocs"
import AnchorDocs from "../../../components/atoms/AnchorDocs"
import CollapseDocs from "../../../components/atoms/CollapseDocs"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import DocsWrapper from "../../../components/common/DocsWrapper"

const Atoms = () => (
  <Layout>
    <SEO
      title="Atoms"
      description="Smallest Components used in the design system - Div, Text, Icons, Buttons, Inputs, Checkbox, Radiobox, Switch, Image, Tags, Anchor & Collapse"
    />
    <DocsWrapper>
      <DivDocs />
      <TextDocs />
      <IconDocs />
      <ButtonDocs />
      <InputDocs />
      <CheckboxDocs />
      <RadioboxDocs />
      <SwitchDocs />
      <ImageDocs />
      <TagDocs />
      <AnchorDocs />
      <CollapseDocs />
    </DocsWrapper>
  </Layout>
)

export default Atoms
