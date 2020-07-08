import Link from 'next/link'

// props here is not receiveing the course.id
export default function CourseItem(props) {
    return (
        <li key={props.course.id}>
            <Link href="/courses/[id]" as={`/courses/${props.course.id}`}>
                <a>
                    {props.course.title}
                </a>
            </Link>
        </li>
    )
}