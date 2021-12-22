import React, { useEffect } from 'react'
import Comments from '../../components/Comments/Comments'
import Achievement from '../../components/Achievement/Achievement'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import CourseList from '../../components/CourseList/CourseList'

function Home() {

    useEffect(() =>{
        window.scroll({
            top:0,
            behavior:"smooth"
        })
    }, [])

    return (
        <div>
            <Banner/>
            <Category/>
            <CourseList/>
            <Achievement/>
            <Comments/>
        </div>
    )
}

export default Home
