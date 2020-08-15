import React from "react"
import styled from "styled-components"
import theme from "prism-react-renderer/themes/oceanicNext"
import Highlight, { defaultProps } from "prism-react-renderer"
import { copyToClipboard } from "../../utils/copyToClipboard"

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  padding: 10px 10px;
  border-radius: 10px !important;
  margin-bottom: 25px;
  -webkit-box-shadow: 6px 10px 22px -9px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 6px 10px 22px -9px rgba(0, 0, 0, 0.57);
  box-shadow: 6px 10px 22px -9px rgba(0, 0, 0, 0.57);
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  color: white;
  opacity: 0.3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &:active {
    outline: none;
  }
`

export default function CodeBlock({ codeString, language, ...props }) {
  function handleClick() {
    copyToClipboard(codeString)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
