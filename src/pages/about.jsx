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
import { Card, CardContent } from '@mui/material';

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
          backgroundColor: '#004AAD', // Override TimelineDot primary color
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#004AAD', // Override TimelineConnector primary color
        },
      },
    },
  },
});

const AboutPage = () => {
  return (
    <Layout>
      <section className="h-screen">
        <div class="container h-full flex flex-col items-center content-center justify-center">
          <h1 className="text-[40px] md:text-[70px] font-bold uppercase text-center text-white tracking-widest">About Me</h1>
          <h6 className="text-white text-center text-[16px] md:text-[25px] px-0 md:px-40">Proven track record of leveraging strong communication skills to effectively collaborate with teams and stakeholders. Committed to continuous learning and staying updated with industry trends. Proficient in Laravel for back-end development and skilled in front-end technologies including VueJS and ReactJS.</h6>
        </div>
      </section>
      <div className="container flex flex-col text-white py-5 space-y-4 px-0 md:px-[200px]">
        <Card variant="outlined" className="transition duration-200 ease-in-out transform hover:drop-shadow-2xl hover:shadow-2xl">
          <CardContent>
            <h2 className="text-[30px] md:text-[50px] font-bold uppercase text-center py-10 tracking-wider text-blue-950">My Work Experiences</h2>
              <ThemeProvider theme={theme}>
                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                  className="px-0 md:px-[100px] pb-12"
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <h6 className="text-blue-950">Freelance Full-stack Developer | Nov 2023 - Present</h6>
                      <h6 className="text-primary">Selft-Employed | Various Clients</h6>
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
                      <h6 className="text-blue-950">Front-end Developer | Oct 2022 - Oct 2023</h6>
                      <h6 className="text-primary">Cenote Solutions (One Year Contract)</h6>
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
                      <h6 className="text-blue-950">Full-stack Web Developer | Feb 2022 - Oct 2022</h6>
                      <h6 className="text-primary">Offshorly</h6>
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
                      <h6 className="text-blue-950">Front-end Web Developer | Aug 2020 - Jun 2021</h6>
                      <h6 className="text-primary">VirtualStaff PH</h6>
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
                      <h6 className="text-blue-950">Freelance Full-stack Developer | May 2018 - Jun 2022</h6>
                      <h6 className="text-primary">Self-Employed | Various Clients</h6>
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
                      <h6 className="text-blue-950">Web Developer | Mar 2017 - Jun 2018</h6>
                      <h6 className="text-primary">Note-e-fied Incorporated</h6>
                      <p className="mt-3">
                        I was assigned to work on two applications for the company, using .NET for the back-end and AngularJS and jQuery for the front-end. My tasks involved developing new features, maintaining existing code, and ensuring smooth interaction between front-end and back-end elements. Throughout this process, I also ensured that the work complied with relevant regulations, such as HIPAA (Health Insurance Portability and Accountability Act) compliance. Given the sensitive nature of the data handled by the applications, ensuring HIPAA compliance was paramount to protect patient confidentiality and privacy. This experience gave me insights into managing complex web projects and collaborating effectively within a team.
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <h6 className="text-blue-950">Software Developer | Mar 2016 - Feb 2017</h6>
                      <h6 className="text-primary">LOGIMINE S.A.S.</h6>
                      <p className="mt-3">
                        I spent some time working on their PCC4 software using JavaEE, and then they switched me to manage over to a fuel management project.
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </ThemeProvider>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="About Me" />

export default AboutPage;