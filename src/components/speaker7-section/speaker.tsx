import Button from "../ui/button/Button"
import "./speaker.css"

const Speaker = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="text">
                    ZX7 SPEAKER
                </div>
                <div 
                style={{maxWidth : "160px"}}>
                   <Button to="/products/speakers/5" isLink={true} variant="secondary">
            See Product
          </Button>
                </div>
            </div>

        </div>
        
    )
}

export default Speaker