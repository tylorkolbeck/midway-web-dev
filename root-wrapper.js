import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./src/components/CodeBlock/CodeBlock"

// This is where you define styling for the markdown that is pulled in for the blog
const components = {
  h2: ({ children }) => <h2>{children}</h2>,
  "p.inlineCode": props => (
    <code {...props} style={{ background: "dodgerblue" }} />
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
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
