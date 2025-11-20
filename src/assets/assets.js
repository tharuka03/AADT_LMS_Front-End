import CourseImage1 from './Media/courseIMG1.jpg'
import CourseImage2 from './Media/courseIMG2.avif'

export const IMG = {
    CourseImage1,
    CourseImage2
}

export const navbar_items = [
    {
        name: "My Courses",
        icon: "fi-rr-graduation-cap",
        path: "/dashboard"
    },
    {
        name: "Gradebook",
        icon: "fi-rr-dashboard",
        path: "/Gradebook"
    },
    {
        name: "Announcement",
        icon: "fi-rr-megaphone",
        path: "/Announcements"
    },
    {
        name: "Profile",
        icon: "fi-rr-user",
        path: "/Profile"
    },
]

export const side_navbar_items = [
    {
        name: "About course",
        icon: "fi-rr-info",
        path: "about"
    },
    {
        name: "Lessons",
        icon: "fi-rr-book",
        path: `lessons`
    },
    {
        name: "Community (Q&A)",
        icon: "fi-rr-lightbulb-on",
        path: "community"
    },
    {
        name: "Performance",
        icon: "fi-rr-dashboard",
        path: "performance"
    },
    {
        name: "Certificate",
        icon: "fi-rr-badge",
        path: "certificate"
    }
];

export const MyCourses = [
    {
        id: 1,
        img: CourseImage1,
        title: "Modern React from the Beginning beginingsdasda beginingsdasda beginingsdasda",
        instructor: "Instructor Name 1",
        duration: "10 hours",
        completed: true
    },
    {
        id: 2,
        img: CourseImage2,
        title: "Course Title 1",
        instructor: "Instructor Name 2",
        duration: "8 hours",
        completed: false
    },
    {
        id: 3,
        img: CourseImage1,
        title: "Course Title 2",
        instructor: "Instructor Name 2",
        duration: "8 hours",
        completed: false
    },
    {
        id: 4,
        img: CourseImage2,
        title: "Course Title 2",
        instructor: "Instructor Name 2",
        duration: "8 hours",
        completed: false
    },
    {
        id: 5,
        img: CourseImage2,
        title: "Course Title 2",
        instructor: "Instructor Name 2",
        duration: "8 hours",
        completed: false
    },
    
]