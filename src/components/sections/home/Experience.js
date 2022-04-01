import React from 'react'

import ExperienceSegment from './ExperienceSegment'

const Experience = () => {
    return(
        <React.Fragment>
            <ExperienceSegment title="Technical Lead & Senior Software Engineer" company="Gallup, Inc" timespan="2019 - Current">
                <ul>
                    <li>Designed, developed, maintained, and improved web-based applications using ASP.NET, React, and MySQL.</li>
                    <li>Hosted and monitored services on Amazon Web Services including but not limited to EC2, Elastic Beanstalk, S3, Lambda, DynamoDB, SNS, and SQS</li>
                    <li>Managed a team of developers and QA specialists and coordinate our team's work with the rest of the technology department (~200 developers)</li>
                    <li>Released code to multiple environments in a highly-coordinated manner using Team Foundation Server and AWS CodeDeploy</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="Software Developer" company="Garner Industries" timespan="2018-2019">
                <ul>
                    <li>Developed, maintained, and improveed web-based applications using ASP.NET, Angular, and SQL Server</li>
                    <li>Hosted and monitored applications on Amazon Web Services</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="IT Intern - Communications Engineering" company="Interpublic Group" timespan="2017-2019">
                <ul>
                    <li>Using PowerShell and Office 365 Admin Portals, collected exchange migration data and Office 365 license usage data</li>
                    <li>Developed and presented dynamic reports of collected data using Power BI and SharePoint</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="Lab Technician III" company="Neogen Corp" timespan="2015-2017">
                <ul>
                    <li>Developed Visual Basic applications that saved each lab approximately 80 man-hours/week</li>
                    <li>Created and improve macros and programs to collect and store laboratory data</li>
                    <li>Ensured programs developed can be implemented on a variety of systems</li>
                    <li>Consulted management personnel in labs around the world</li>
                    <li>Implemented usage of my applications in labs in Scotland, Brazil, and the United States</li>
                    <li>Use robots and manual techniques to conduct laboratory experiments</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="Graduate Research Assistant" company="University of Nebraska - Lincoln" timespan="2013-2015">
                <ul>
                    <li>Hardin Distinguished Graduate Fellowship for outstanding work and exemplary performance as a graduate research assistant Undergraduate Research Assistant</li>
                    <li>George & Mary Haskell Scholarship for most outstanding performance and highest grades amongst veterans and active military members at the University of Nebraska</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="Infantry Assaultman & Team Leader" company="United States Marine Corps" timespan="2010-2014">
                <ul>
                    <li>Meritorious promotions to Private First Class, Lance Corporal, and Corporal</li>
                    <li>Oversaw the safe and effective employment of high explosives, anti-armor/anti-tank weaponry, and urban breaching equipment as well as maintenance, and accountability thereof</li>
                    <li>Ensured that marines in my charge carefully and efficiently carried out all lawful orders given by members of their chain of command</li>
                    <li>Effectively communicated with marines of in my charge and with those appointed over me</li>
                </ul>
            </ExperienceSegment>
            <ExperienceSegment title="Chemical Engineering Research Intern" company="NASA" timespan="2012">
                <ul>
                    <li>Patents:
                        <ul className="list-unstyled">
                            <li>US-9957336-B2 - Method of Making Dye-Doped Polystyrene Microparticles</li>
                            <li>US-10669360-B2 - Dye Doped Polymer Microparticles</li>
                        </ul>
                    </li>
                </ul>
            </ExperienceSegment>
        </React.Fragment>
    )
}

export default Experience;