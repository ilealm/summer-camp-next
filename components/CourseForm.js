import React from 'react'

export default class CourseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const newTitle = event.target.value;
        this.setState({
            title: newTitle,
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCourseCreate(this.state);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Course:
                    <input
                    name="course-title" type="text" value={this.state.title} onChange={this.handleChange}>
                    </input>
                </label>

                <button>ok</button>
            </form>
        )
    }
}