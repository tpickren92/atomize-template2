import React from "react"

import DropdownDocs from "../../../components/molecules/DropdownDocs"
import ModalDocs from "../../../components/molecules/ModalDocs"
import SideDrawerDocs from "../../../components/molecules/SideDrawerDocs"
import NotificationDocs from "../../../components/molecules/NotificationDocs"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import DocsWrapper from "../../../components/common/DocsWrapper"

const Molecules = () => (
  <Layout>
    <SEO
      title="Molecules"
      description="Components created using a group of atoms in Atomize Design System - Dropdown, Modal, SideDrawer, Notification."
    />
    <DocsWrapper>
      <DropdownDocs />
      <ModalDocs />
      <SideDrawerDocs />
      <NotificationDocs />
    </DocsWrapper>
  </Layout>
)

export default Molecules
