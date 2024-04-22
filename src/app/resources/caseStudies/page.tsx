import Navbar from "@/components/navbar/page"
import style from "../../../styles/leader.module.css"
import caseStyle from "../../../styles/case.module.css"
import Footer from "@/components/footer/page"

export default function CaseStudies(){
    return(
        <div className={style.container}>
            <div className={style.wrapper}>
                <Navbar/>
                <div className={caseStyle.blogsContainer}><p>Blogs</p></div>
                <div className={caseStyle.insightContainer}><p>Insights</p></div>
                <div className={caseStyle.caseContainer}><p>Case Studies</p></div>
                <Footer/>
            </div>
        </div>
    )
}