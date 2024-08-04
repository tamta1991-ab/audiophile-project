import Modal from "react-modal";
import "./style.css";
import ProductSection from "../product-section/ProductSection";

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavModal = ({ modalIsOpen, setIsOpen }: Props) => {
  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      className="nav-modal"
  
    >
      <button type="button"
       style={{
        border : 'none',
        color:'#979797',
        backgroundColor: 'transparent',
        position:"sticky",
        top:'3rem',
        left: '3rem'
        
    }}
      onClick={() => setIsOpen(false)}>CLOSE </button>
      <ProductSection/>

    </Modal>
  );
};

export default NavModal;