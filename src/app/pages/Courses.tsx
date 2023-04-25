import React, { useEffect, useState } from 'react';
import './Courses.css';
import { PeopleFill } from 'react-bootstrap-icons';
import CoursesDataService from '../services/courses.service';
import { COURSES_SECTION_01_BTN, COURSES_SECTION_01_CARD_01_DESC, COURSES_SECTION_01_CARD_01_TITLE, COURSES_SECTION_01_CARD_02_DESC, COURSES_SECTION_01_CARD_02_TITLE, COURSES_SECTION_01_CARD_03_DESC, COURSES_SECTION_01_CARD_03_TITLE, COURSES_SECTION_01_TITLE_01, COURSES_SECTION_01_TITLE_02, COURSES_SECTION_01_TITLE_03, COURSES_SECTION_02_DESC, COURSES_SECTION_02_TITLE } from '../variables';

interface Course {
    id: number,
    name: string,
    description: string, 
    active: boolean,
    link: string
}
const Courses:React.FC = ():JSX.Element => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        if(courses.length === 0){
            CoursesDataService.getAll().then((res: { data: React.SetStateAction<never[]>; })=>{
                setCourses(res.data);
            }).catch((err: any)=>{
                console.log(err);
            });
        }
    },[courses]);

  return (
    <div className="courses">
        <div className="courses-elem-12"> 
            <span className="courses-elem-13">
                <p><span className="courses-desc-01">{COURSES_SECTION_01_TITLE_01}</span>{COURSES_SECTION_01_TITLE_02}<span className="courses-desc-01"> </span>{COURSES_SECTION_01_TITLE_03}</p>
            </span>
            <span className="courses-elem-14">
                <p><br/></p>
            </span>
            <div className="courses-elem-15">
                <div className="courses-elem-17">
                    <div className="courses-elem-16"> <PeopleFill size={100} color={"white"}/></div>
                    <div className="courses-elem-36"> 
                        <span className="courses-elem-19">
                            <p>{COURSES_SECTION_01_CARD_01_TITLE}</p>
                        </span>
                        <span className="courses-elem-18">
                            <p>{COURSES_SECTION_01_CARD_01_DESC}</p>
                        </span></div>
                </div>
                <div className="courses-elem-24">
                    <div className="courses-elem-21"> 
                        <span className="courses-elem-20"> 
                            <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1672208822/static/vector-4svg_1672207968_28563.svg" alt='project work'/> 
                        </span>
                    </div>
                    <div className="courses-elem-37"> 
                        <span className="courses-elem-23">
                            <p>{COURSES_SECTION_01_CARD_02_TITLE}</p>
                        </span>
                        <span className="courses-elem-22">
                            <p>{COURSES_SECTION_01_CARD_02_DESC}</p>
                        </span>
                    </div>
                </div>
                <div className="courses-elem-29">
                    <div className="courses-elem-26"> 
                        <span className="courses-elem-25"> 
                            <img src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1672208822/static/vector-3svg_1672207968_79947.svg" alt='assignment'/> 
                        </span>
                    </div>
                    <div className="courses-elem-38"> 
                        <span className="courses-elem-28">
                            <p>{COURSES_SECTION_01_CARD_03_TITLE}</p>
                        </span>
                        <span className="courses-elem-27">
                            <p>{COURSES_SECTION_01_CARD_03_DESC}</p>
                        </span>
                    </div>
                </div>
            </div>
            <button className="courses-elem-35">
                <p>{COURSES_SECTION_01_BTN}</p>
            </button>
        </div>
        <div className="courses-elem-104">
            <div className="courses-elem-105"> 
                <span className="courses-elem-106">
                    <p>{COURSES_SECTION_02_TITLE}</p>
                </span>
                <span className="courses-elem-107">
                    <p>{COURSES_SECTION_02_DESC}</p>
                </span>
            </div>
            <div className="courses-elem-108">
                {courses && courses.map((course: Course) => (
                    <div className="courses-section-02" key={course.id}> 
                        <span className="courses-section-02-title">
                            <p>{course.name}</p>
                        </span>
                        <span className="courses-section-02-desc">
                            <p>{course.description}</p>
                        </span>
                        <button className="courses-section-02-btn">
                            <a href={course.link}>Start Now</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Courses;