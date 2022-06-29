import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const paddingCode1 = `// Normal Width
w="3rem"

// Responsive Width
w={{ xs: 'auto', md: '100vw' }}`

const Width = () => {
  return (
    <InfoCodeSidebar code={paddingCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        To keep the design under 8px grid, we keep the html font size to 16px.
        Though you can use any value to height & width. We recommend using{" "}
        <Tag>rem</Tag> to specify Height & Width.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Width
