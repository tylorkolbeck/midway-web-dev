import React from "react"
import colors from "./src/css/colors.scss"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock/CodeBlock"

const linkStyling = {
  color: colors.primary,
  fontWeight: "500",
  display: "inline-block",
}

// This is where you define styling for the markdown that is pulled in for the blog
const components = {
  h2: ({ children }) => <h2>{children}</h2>,
  "p.inlineCode": props => (
    <code
      {...props}
      style={{
        background: colors.tertLight,
        padding: "0px 2px",
        borderRadius: "4px",
      }}
    />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <CodeBlock
          codeString={props.children.trim()}
          language={props.className && props.className.replace(`language-`, "")}
          {...props}
        />
      )
    }
  },
  a: ({ children }) => <a style={{ ...linkStyling }}>{children}</a>,
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <div>{element}</div>
    </MDXProvider>
  )
}
