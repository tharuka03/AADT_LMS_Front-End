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
        title: "Modern React from the Beginning. (ReactJS | Node JS | MongoDB)",
        instructor: "Instructor Name 1",
        duration: "10 hours",
        completed: true,
        description: "Master full-stack web development with the powerful MERN stack (MongoDB, Express.js, React, and Node.js). This advanced course takes you beyond the basics, equipping you with the skills to build scalable, production-ready web applications using JavaScript across the entire development stack.",
        CourseOutline: "You'll dive deep into MongoDB for flexible database design and efficient data modeling, while mastering Express.js and Node.js to create robust RESTful APIs and server-side applications. The course extensively covers React, including hooks, context API, and advanced state management patterns, enabling you to build dynamic, responsive user interfaces.",
        LearningOutComes: [
            "Develop full-stack applications using MongoDB, Express.js, React.js, and Node.js with efficient state and data management.",
            "Implement RESTful APIs and handle asynchronous data flow with proper error handling and validation.",
            "Build dynamic, responsive UI components using React hooks, context, and routing principles.",
            "Integrate authentication and authorization mechanisms using JWT and secure session management.",
            "Deploy MERN applications on cloud platforms with continuous integration and environment configuration best practices."
        ],
        Lessons: [

        ],
        QnA: [

        ],
        performance: [

        ],
        Certificate: ""
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