import Button from "../ui/button/Button"
import "./earphone.css"
import BitmapImg from './Bitmap.png'

const Earphone = () => {
    return (
        <div className="container">
            <div className="section-container">
                <div className="earphone-image">
                    <img src={BitmapImg} alt="earphone" />
                </div>
                <div className="text-section">
                    <div className="text">YX1 EARPHONES</div>
                    <div>
                        <Button 
                            to="./products/earphones/1" isLink={true} variant="secondary">
                                See Product
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earphone