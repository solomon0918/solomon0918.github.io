import * as React from "react"

const HeadingWithLine = ({ children }) => {
  return (
    <div className="tw-relative">
      <div
        className={`tw-absolute tw-left-14 tw-hidden tw-h-full tw-w-4 tw-bg-secondary sm:tw-block`}
      ></div>
      {children}
    </div>
  )
}

export default HeadingWithLine
