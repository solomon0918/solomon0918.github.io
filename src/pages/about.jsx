import * as React from "react"
import Layout from "../components/structure/layout"
import Seo from "../components/common/seo"
import Timeline from "@mui/lab/Timeline"
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent"
import useInView from "../components/common/hooks/useInView"

const theme = createTheme({
  palette: {
    primary: {
      main: "#964734", // Your custom primary color
    },
  },
  components: {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: "#964734",
          boxShadow: "0 0 0 8px #024950",
          padding: "9px",
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(var(--text))", // Override TimelineConnector primary color
        },
      },
    },
  },
})

const AboutPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)")

  const timelineRef = useInView()

  return (
    <Layout>
      <section className="tw-container tw-mx-auto tw-py-20">
        <div className="tw-flex tw-flex-col">
          <div className="tw-relative">
            <div className="tw-absolute tw--left-6 tw-hidden tw-h-full tw-w-4 tw-bg-primary_dark sm:tw-block dark:tw-bg-secondary"></div>
            <h1 className="tw-text-5xl tw-font-bold tw-uppercase">About Me</h1>
          </div>
          <p className="tw-w-full tw-text-base tw-uppercase md:tw-w-[80%]">
            Proven track record of leveraging strong communication skills to
            effectively collaborate with teams and stakeholders. Committed to
            continuous learning and staying updated with industry trends.
            Proficient in Laravel for back-end development and skilled in
            front-end technologies including VueJS and ReactJS.
          </p>
        </div>

        <div className="tw-py-8 tw-fade-up" ref={timelineRef}>
          <ThemeProvider theme={theme}>
            {isMobile ? (
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Freelance Full-stack Developer | Nov 2023 - Present
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Selft-Employed | Various Clients
                    </p>
                    <ul className="tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base">
                      <li>
                        Collaborated with multiple employers to identify and fix
                        software bugs, enhancing system functionality and
                        performance.
                      </li>
                      <li>
                        Focused on identifying and fixing bugs in LMS ( Learning
                        Management Systems ), improving functionality and user
                        experience for multiple projects.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Front-end Developer | Oct 2022 - Oct 2023
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Cenote Solutions (One Year Contract)
                    </p>
                    <p className="tw-mt-3 tw-text-base">
                      In my role as a front-end developer, I had several key
                      responsibilities which primarily focused on enhancing and
                      maintaining their product, Pulse. Additionally, I was
                      tasked with the development of new modules using React and
                      Typescript. I was responsible for building their IAM
                      module, designed to config and analyze survey data
                      collected from Qualtrics, where students provided their
                      responses. Furthermore, I worked on overhauling various
                      existing modules, notable the users and roles management,
                      to improve their functionality and user experience.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Full-stack Web Developer | Feb 2022 - Oct 2022
                    </h6>
                    <h6 className="tw-text-base tw-uppercase">Offshorly</h6>
                    <p className="tw-mt-3 tw-text-base">
                      Worked on a project called Auction Tale, focusing on the
                      front-end development. The project uses Laravel 9 for the
                      back-end and VueJS for the front-end. I managed the
                      development team, which included three part-time back-end
                      developers and one part-time front-end developer. Auction
                      Tale is a bidding application.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Front-end Web Developer | Aug 2020 - Jun 2021
                    </h6>
                    <h6 className="tw-text-base tw-uppercase">
                      VirtualStaff PH
                    </h6>
                    <p className="tw-mt-3 tw-text-base">
                      Worked on a new application for finding virtual assistants
                      from scratch using ReactJS. The application includes
                      dashboards for employers and job seekers with multiple
                      features like chat and time tracking. The goal was to
                      revamp their site.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Freelance Full-stack Developer | May 2018 - Jun 2022
                    </h6>
                    <h6 className="tw-text-base tw-uppercase">
                      Self-Employed | Various Clients
                    </h6>
                    <ul className="tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base">
                      <li>
                        I worked as a freelancer for a{" "}
                        <strong>traffic school</strong>, handling both the
                        back-end (using Laravel) and the front-end (with VueJS
                        2) of a project. I also set up a new server running on
                        CentOS 8.
                      </li>
                      <li>
                        I worked as a freelancer for a construction company
                        called <strong>SBHE Pte Ltd</strong>. I was responsible
                        for their front-end project management website using
                        AngularJS and also did some work on the back-end API,
                        which is in Laravel.
                      </li>
                      <li>
                        I worked part-time for a company called{" "}
                        <strong>California Ticket King, PC</strong>, and then
                        moved to full-time. I'm responsible for their payment
                        portal using Slim PHP and jQuery, and their dashboard
                        website using Laravel and VueJS.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Web Developer | Mar 2017 - Jun 2018
                    </h6>
                    <h6 className="tw-text-base tw-uppercase">
                      Note-e-fied Incorporated
                    </h6>
                    <p className="tw-mt-3 tw-text-base">
                      I was assigned to work on two applications for the
                      company, using .NET for the back-end and AngularJS and
                      jQuery for the front-end. My tasks involved developing new
                      features, maintaining existing code, and ensuring smooth
                      interaction between front-end and back-end elements.
                      Throughout this process, I also ensured that the work
                      complied with relevant regulations, such as HIPAA (Health
                      Insurance Portability and Accountability Act) compliance.
                      Given the sensitive nature of the data handled by the
                      applications, ensuring HIPAA compliance was paramount to
                      protect patient confidentiality and privacy. This
                      experience gave me insights into managing complex web
                      projects and collaborating effectively within a team.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-base tw-font-bold tw-uppercase">
                      Software Developer | Mar 2016 - Feb 2017
                    </h6>
                    <h6 className="tw-text-base tw-uppercase">
                      LOGIMINE S.A.S.
                    </h6>
                    <p className="tw-mt-3 tw-text-base">
                      I spent some time working on their PCC4 software using
                      JavaEE, and then they switched me to manage over to a fuel
                      management project.
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            ) : (
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                    paddingLeft: 0,
                    textAlign: "left",
                  },
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Nov 2023 - Present
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Freelance Full-stack Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Self-Employed | Various Clients
                    </p>
                    <ul className="tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base">
                      <li>
                        Collaborated with multiple employers to identify and fix
                        software bugs, enhancing system functionality and
                        performance.
                      </li>
                      <li>
                        Focused on identifying and fixing bugs in LMS ( Learning
                        Management Systems ), improving functionality and user
                        experience for multiple projects.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Oct 2022 - Oct 2023
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Front-end Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Cenote Solutions (One Year Contract)
                    </p>
                    <p className="tw-mt-3 tw-text-base">
                      In my role as a front-end developer, I had several key
                      responsibilities which primarily focused on enhancing and
                      maintaining their product, Pulse. Additionally, I was
                      tasked with the development of new modules using React and
                      Typescript. I was responsible for building their IAM
                      module, designed to config and analyze survey data
                      collected from Qualtrics, where students provided their
                      responses. Furthermore, I worked on overhauling various
                      existing modules, notable the users and roles management,
                      to improve their functionality and user experience.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Feb 2022 - Oct 2022
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Full-stack Web Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">Offshorly</p>
                    <p className="tw-mt-3 tw-text-base">
                      Worked on a project called Auction Tale, focusing on the
                      front-end development. The project uses Laravel 9 for the
                      back-end and VueJS for the front-end. I managed the
                      development team, which included three part-time back-end
                      developers and one part-time front-end developer. Auction
                      Tale is a bidding application.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Aug 2020 - Jun 2021
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Front-end Web Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">VirtualStaff PH</p>
                    <p className="tw-mt-3 tw-text-base">
                      Worked on a new application for finding virtual assistants
                      from scratch using ReactJS. The application includes
                      dashboards for employers and job seekers with multiple
                      features like chat and time tracking. The goal was to
                      revamp their site.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      May 2018 - Jun 2022
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Freelance Full-stack Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Self-Employed | Various Clients
                    </p>
                    <ul className="tw-mt-3 tw-list-disc tw-space-y-2 tw-px-4 tw-text-base">
                      <li>
                        I worked as a freelancer for a{" "}
                        <strong>traffic school</strong>, handling both the
                        back-end (using Laravel) and the front-end (with VueJS
                        2) of a project. I also set up a new server running on
                        CentOS 8.
                      </li>
                      <li>
                        I worked as a freelancer for a construction company
                        called <strong>SBHE Pte Ltd</strong>. I was responsible
                        for their front-end project management website using
                        AngularJS and also did some work on the back-end API,
                        which is in Laravel.
                      </li>
                      <li>
                        I worked part-time for a company called{" "}
                        <strong>California Ticket King, PC</strong>, and then
                        moved to full-time. I'm responsible for their payment
                        portal using Slim PHP and jQuery, and their dashboard
                        website using Laravel and VueJS.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Mar 2017 - Jun 2018
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Web Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">
                      Note-e-fied Incorporated
                    </p>
                    <p className="tw-mt-3 tw-text-base">
                      I was assigned to work on two applications for the
                      company, using .NET for the back-end and AngularJS and
                      jQuery for the front-end. My tasks involved developing new
                      features, maintaining existing code, and ensuring smooth
                      interaction between front-end and back-end elements.
                      Throughout this process, I also ensured that the work
                      complied with relevant regulations, such as HIPAA (Health
                      Insurance Portability and Accountability Act) compliance.
                      Given the sensitive nature of the data handled by the
                      applications, ensuring HIPAA compliance was paramount to
                      protect patient confidentiality and privacy. This
                      experience gave me insights into managing complex web
                      projects and collaborating effectively within a team.
                    </p>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent>
                    <p className="tw-rounded-lg tw-bg-gray-500 tw-py-2 tw-text-center tw-text-base tw-uppercase tw-text-white">
                      Mar 2016 - Feb 2017
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h6 className="tw-text-lg tw-font-bold tw-uppercase">
                      Software Developer
                    </h6>
                    <p className="tw-text-base tw-uppercase">LOGIMINE S.A.S.</p>
                    <p className="tw-mt-3 tw-text-base">
                      I spent some time working on their PCC4 software using
                      JavaEE, and then they switched me to manage over to a fuel
                      management project.
                    </p>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            )}
          </ThemeProvider>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
