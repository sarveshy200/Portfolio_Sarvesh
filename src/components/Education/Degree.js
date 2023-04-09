import React from "react";

import classes from "./degree.module.css";
import UniversityImg from "../../Data/universityLogo.png";
import UniversityImg2 from "../../Data/LuLogo.jpg";
import Experience from "../../Data/Experience.png";

import Card from "../UI/Card";
import EducationData from "../../Data/EducationData"
import { useSelector } from "react-redux";

function Degree(props) {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.degreeMain}>
            <h1 style={{ color: nonThemeColor }}>
                Degree 
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>{EducationData.couseStartYear} - {EducationData.courseEndYear}</h3>
                        <h1 style={{ color: uiColor }}>{EducationData.collegeName}</h1>
                        <h2 style={{ color: nonThemeColor }}>{EducationData.courseName}</h2>
                    </div>
                    <ul className={classes.details}>
                        {EducationData.details.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </Card>
                
            </div>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={UniversityImg2} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>2019 - 2022</h3>
                        <h1 style={{ color: uiColor }}> University of Lucknow</h1>
                        <h2 style={{ color: nonThemeColor }}>Bachelor of Computer Application</h2>
                    </div>
                    <ul className={classes.details}>
                        <li>I joined my college in 2019. Cleared All Semester Exam with a good academic performance.</li>
                        <li>I have studied basic Computer Science subjects like DSA, software Engineering, Java, C Programming OS, SQL  etc.</li>
                    </ul>
                </Card>
                
            </div>
            
            <h1 style={{ color: nonThemeColor }}>
                Experience
            </h1>
            <div className={classes.degreeCard}>
                <div className={`${classes.degreeImage} centered`} style={{borderColor:uiColor}}>
                    <img src={Experience} alt="degree" srcset="" />
                </div>
                <Card className={classes.degreeWrapper}>
                    <div className={classes.degreeInfo}>
                        <h3 style={{ color: nonThemeColor }}>2019 - 2022</h3>
                        <h1 style={{ color: uiColor }}> Uptec Computer Consultancy Ltd</h1>
                        <h2 style={{ color: nonThemeColor }}>Lucknow, Uttar Pradesh, India • On-site</h2>
                    </div>
                    <ul className={classes.details}> 
                            <li>Learn Basic Python</li>
                            <li>During this period, I developed the project titled "Vaccination Website"
                            using "Django & MYSQL" Technology</li>
                    </ul>
                </Card>
        </div>
        </div>
        
    )
}

export default Degree;