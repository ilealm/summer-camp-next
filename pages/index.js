import React from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import CourseForm from '../components/CourseForm'
import CourseItem from '../components/CourseItem'

const url = 'https://ileal-summer-camp-api.herokuapp.com/api/v1/courses/';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: props.courses
        }
        this.courseCreateHandler = this.courseCreateHandler.bind(this);
    }

    async courseCreateHandler(course) {

        const response = await axios.post(url, course);

        // decision: add the newly created to state or fetch brand new
        // let's go with option 1
        const savedCourse = response.data;

        const updatedCourses = this.state.courses.concat(savedCourse);

        this.setState({
            courses: updatedCourses
        })

        // Stretch: how can you make even snappier?
    }

    render() {
        return (
            <div className="container">
                <Nav />
                <h1>Summer Courses</h1>
                <ul>
                    {this.state.courses.map(course => <CourseItem key={course.id} course={course} />)}
                </ul>
                <CourseForm onCourseCreate={this.courseCreateHandler} />

                <style jsx>{`
            .container {
                text-align: center;
            }
        `}
                </style>

                <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

            </div>
        )
    }
}

export default Home

// export async function getStaticProps() {
export async function getServerSideProps() {

    const response = await fetch(url);
    const courses = await response.json();

    return {
        props: {
            courses: courses,
        },
    }
}