import * as React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004AAD', // Your custom primary color
    },
  },
  components: {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: '#CAF4FF', // Override TimelineDot primary color
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#5DE0E6', // Override TimelineConnector primary color
        },
      },
    },
  },
});

const AboutPage = () => {
  return (
    <Layout>
      <div className="container flex flex-col text-white py-5 space-y-4 px-0 md:px-[200px]">
        <h2 className="text-[50px] font-bold uppercase text-center">About Me</h2>
        <p className="text-[19px] px-7 text-left md:text-center">
          Graduated with a Bachelor's degree in Information Technology, specializing in software engineering, from a prestigious university. Proven track record of leveraging strong communication skills to effectively collaborate with teams and stakeholders. Committed to continuous learning and staying updated with industry trends. Proficient in Laravel for back-end development and skilled in front-end technologies including VueJS and ReactJS.
        </p>
        <h3 className="text-[40px] font-bold uppercase px-10">My Work Experiences</h3>
        <ThemeProvider theme={theme}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
            className="px-0 md:px-[70px]"
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h6>Freelance Full-stack Developer | Nov 2023 - Present</h6>
                <h6>Selft-Employed | Various Clients</h6>
                <ul className="mt-3 space-y-2 list-disc px-4 text-[19px]">
                  <li>
                    Collaborated with multiple employers to identify and fix software bugs, enhancing system functionality and performance.
                  </li>
                  <li>
                    Focused on identifying and fixing bugs in LMS ( Learning Management Systems ), improving functionality and user experience for multiple projects.
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
                <h6>Front-end Developer | Oct 2022 - Oct 2023</h6>
                <h6>Cenote Solutions (One Year Contract)</h6>
                <p className="mt-3">
                  In my role as a front-end developer, I had several key responsibilities which primarily focused on enhancing and maintaining their product, Pulse. Additionally, I was tasked with the development of new modules using React and Typescript. I was responsible for building their IAM module, designed to config and analyze survey data collected from Qualtrics, where students provided their responses. Furthermore, I worked on overhauling various existing modules, notable the users and roles management, to improve their functionality and user experience.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h6>Full-stack Web Developer | Feb 2022 - Oct 2022</h6>
                <h6>Offshorly</h6>
                <p className="mt-3">
                  Worked on a project called Auction Tale, focusing on the front-end development. The project uses Laravel 9 for the back-end and VueJS for the front-end. I managed the development team, which included three part-time back-end developers and one part-time front-end developer. Auction Tale is a bidding application.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h6>Front-end Web Developer | Aug 2020 - Jun 2021</h6>
                <h6>VirtualStaff PH</h6>
                <p className="mt-3">
                  Worked on a new application for finding virtual assistants from scratch using ReactJS. The application includes dashboards for employers and job seekers with multiple features like chat and time tracking. The goal was to revamp their site.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h6>Freelance Full-stack Developer | May 2018 - Jun 2022</h6>
                <h6>Self-Employed | Various Clients</h6>
                <ul className="mt-3 space-y-2 list-disc px-4 text-[19px]">
                  <li>
                    I worked as a freelancer for a <strong>traffic school</strong>, handling both the back-end (using Laravel) and the front-end (with VueJS 2) of a project. I also set up a new server running on CentOS 8.
                  </li>
                  <li>
                    I worked as a freelancer for a construction company called <strong>SBHE Pte Ltd</strong>. I was responsible for their front-end project management website using AngularJS and also did some work on the back-end API, which is in Laravel.
                  </li>
                  <li>
                    I worked part-time for a company called <strong>California Ticket King, PC</strong>, and then moved to full-time. I'm responsible for their payment portal using Slim PHP and jQuery, and their dashboard website using Laravel and VueJS.
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
                <h6>Web Developer | Mar 2017 - Jun 2018</h6>
                <h6>Note-e-fied Incorporated</h6>
                <p className="mt-3">
                  I was assigned to work on two applications for the company, using .NET for the back-end and AngularJS and jQuery for the front-end. My tasks involved developing new features, maintaining existing code, and ensuring smooth interaction between front-end and back-end elements. This experience gave me insights into managing complex web projects and collaborating effectively within a team.
                </p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h6>Software Developer | Mar 2016 - Feb 2017</h6>
                <h6>LOGIMINE S.A.S.</h6>
                <p className="mt-3">
                  I spent some time working on their PCC4 software using JavaEE, and then they switched me to manage over to a fuel management project.
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ThemeProvider>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About Me" />

export default AboutPage;