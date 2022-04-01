import React from 'react'

import EducationSegment from './EducationSegment'

const Education = () => {
    return(
        <React.Fragment>
            <EducationSegment degree="M.S. in Organizational Management" minor="Emphasis: IT Management" gpa="4.0" school="Wayne State College" timespan="2021-2023" />
            <EducationSegment degree="B.S. in Biochemistry" minor="Minors: Biology, Chemistry, Math, Music" gpa="3.5" school="University of Nebraska" timespan="2008-2014" />
            <EducationSegment degree="A.S. in Information Technology" minor="" gpa="4.0" school="Metropolitan C.C." timespan="2017-2018" />
        </React.Fragment>
    )
}

export default Education;