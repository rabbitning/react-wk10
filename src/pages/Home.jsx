import Header from "../components/Header"
import ImageList from "../components/ImageList"
import Description from "../components/Description"
import Footer from "../components/Footer"
import { useImages } from '../react-query'

export default function Home() {

    const { data, isLoading } = useImages()
    const images = data || []

    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <ImageList className="layoutImages" images={images} isLoading={isLoading} />
            <Description className="layoutDescription" />
            <Footer className="layoutFooter" />
        </div>
    )
}