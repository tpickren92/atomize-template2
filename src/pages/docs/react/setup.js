import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Div, Anchor } from "atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"
import Highlight, { defaultProps } from "prism-react-renderer"

import codeTheme from "../../../components/common/codeTheme"

const usageCode = `import React from 'react';
import { StyleReset } from 'atomize';
import App from './src/App';

export default function Main() {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
}`

const customizationCode = `import React from 'react';
import { ThemeProvider, StyleReset } from 'atomize';
import App from './src/App';

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  );
}`

const Setup = () => (
  <Layout>
    <SEO title="Setup" description="Setup guide for Atomize design system." />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text tag="h2" textWeight="400" textSize="display2" m={{ b: "4rem" }}>
          Getting Started
        </Text>

        {/* Installation */}
        <Text
          tag="h3"
          textWeight="400"
          textSize="heading"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Installation
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Open a Terminal in your project's folder and run,
        </Text>
        <Div
          m={{ b: "4rem" }}
          p={{ x: "0.5rem" }}
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={`yarn add atomize react-transition-group`}
            language="bash"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Div>

        {/* Styletron */}
        <Text
          tag="h3"
          textWeight="400"
          textSize="heading"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Install Styletron engine
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Atomize uses styletron engine for generating atomic className for
          style. Install for -
        </Text>
        <Div m={{ b: "4rem" }}>
          <Anchor
            href="https://www.styletron.org/getting-started/#with-react"
            target="_blank"
            d="block"
          >
            React
          </Anchor>
          <Anchor
            href="https://www.styletron.org/getting-started/#with-fusionjs"
            target="_blank"
            d="block"
          >
            Fusion.js
          </Anchor>
          <Anchor
            href="https://www.styletron.org/getting-started/#with-nextjs"
            target="_blank"
            d="block"
          >
            Next.js
          </Anchor>
          <Anchor
            href="https://www.styletron.org/getting-started/#with-gatsby"
            target="_blank"
            d="block"
          >
            Gatsby
          </Anchor>
        </Div>

        {/* Usage */}
        <Text
          tag="h3"
          textWeight="400"
          textSize="heading"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Usage
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Include the StyleReset from atomize to your root component inside
          styletron wrapper. It's a good idea to add it in the component which
          is passed to entire app. This will usually be in the index.js file or
          App.js file.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Example:
        </Text>
        <Div
          m={{ b: "4rem" }}
          p="0.5rem"
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={usageCode}
            language="jsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Div>

        {/* Customization */}
        <Text
          tag="h3"
          textWeight="400"
          textSize="heading"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Customization
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          You can provide a custom theme to customize the colors, fonts etc.
          with the ThemeProvider component. Check the theme customization
          options in <Link to="/docs/react/theme">Theme Setup</Link>.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Example:
        </Text>
        <Div
          m={{ b: "1rem" }}
          p="0.5rem"
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={customizationCode}
            language="jsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Div>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default Setup
