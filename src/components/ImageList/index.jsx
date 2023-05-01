import { Row, Col } from 'antd'
import styles from './imagelist.module.css'
import ImageItem from '../ImageItem'

export default function ImageList({ images, isLoading }) {
    return (
        <article className={styles.imageLayout}>
            <div className="container">
                <h1>IMAGES</h1>
                <hr className="divider--dark" />
                <Row gutter={[24, 0]}>
                    {images.map(imagedata => (
                        <Col key={imagedata.id} className={styles.image} sm={{ span: 12 }} lg={{ span: 6 }}>
                            <ImageItem imagedata={imagedata} />
                        </Col>
                    ))}
                </Row>
            </div>
        </article>
    )
}