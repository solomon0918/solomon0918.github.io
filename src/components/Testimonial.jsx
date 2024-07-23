import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import StarIcon from "@mui/icons-material/Star"

const Testimonial = ({ image, name, description }) => {
  return (
    <div className="tw-relative tw-my-4 tw-rounded-xl tw-bg-white tw-px-8 tw-pb-8 tw-pt-6 tw-text-black tw-drop-shadow-2xl dark:tw-drop-shadow-none">
      <div className="tw-left-0 tw-top-0 tw-flex tw-justify-center md:tw-absolute md:tw-left-5 md:tw-top-[-75px]">
        <GatsbyImage
          className="tw-h-[150px] tw-w-[150px] tw-rounded-full tw-shadow-lg tw-shadow-primary_dark dark:tw-shadow-none"
          image={image.node.childImageSharp.gatsbyImageData}
          formats={["auto", "webp"]}
          loading="lazy"
          alt={name}
        />
      </div>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h6 className="tw-text-center tw-text-xl tw-font-bold">{name}</h6>
        <div>
          {Array.from({ length: 5 }).map((_, index) => {
            return <StarIcon key={index} className="tw-text-yellow-400" />
          })}
        </div>
      </div>
      <div className="tw-my-4 tw-border-2 tw-border-primary_dark"></div>
      {/* <div className=" tw-bg-primary_dark dark:tw-bg-secondary"></div> */}
      <p className="tw-mt-4 tw-text-center tw-italic">"{description}"</p>
    </div>
  )
}

export default Testimonial
