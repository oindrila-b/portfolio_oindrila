import React, { useRef } from 'react'
import '../Projects/Projects.scss'
import document from '../../assets/document_processor.jpg'
import xmlToJSON from '../../assets/xml_to_json.jpg'
import books from '../../assets/books.jpg'
import garage from '../../assets/garage.png'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Document Processor",
        img: document,
        desc: "This is the backend of a fullstack project that processes a document and extracts a summary out of it and also gets ansewers about the document",
        link: "https://github.com/oindrila-b/document-processor-client"
    },
    {
        id: 2,
        title: "XML to JSON",
        img: xmlToJSON,
        desc: "This is the backend project using Java and SpringBoot that processes an XML document and extracts the contents between specific xml tags as JSON arrays and returns that to the client.",
        link: "https://github.com/oindrila-b/xml-to-json"
    },
    {
        id: 3,
        title: "Book Store",
        img: books,
        desc: "A simple Flutter applicatuon that uses Google's Books API to list down books, it contains search functionality and also navigates to the google api link",
        link:"https://github.com/oindrila-b/theBookStore"
    },
    {
        id: 4,
        title: "Garage Rental",
        img: garage,
        desc: "This is the backend of a fullstack project, using Java,SpringBoot & MySQL that is still ongoing, it's idea is to help users book garages to keep their cars, theu can book it monthly or yearly",
        link:"https://github.com/oindrila-b/garage-rental"
    }
]


const Single = ({ item }) => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100,92])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="image-container" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>

                    <motion.div className="txt" style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}>
                        <button>See Code</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 30,
        })

    return (
        <div className='projects' ref={ref}>
            <div className="progress">
                <h1> Featured Projects </h1>
                <motion.div
                    className="progressBar"
                    style={{ scaleX: scaleX }}
                >

                </motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects