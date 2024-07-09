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
      <ProductSection/>

    </Modal>
  );
};

export default NavModal;