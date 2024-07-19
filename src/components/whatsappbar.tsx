import { MdOutlineWhatsapp } from "react-icons/md";

import styles from "./whatsappbar.module.css";

const Whatsappbar = () => {
    return (
        <div className={styles.bar}>
            Para agendamento ou dúvidas
            <a href="https://wa.me/5519991150069" target="_blank" className={styles.button}> 
                <MdOutlineWhatsapp /> Whatsapp
            </a>
        </div>
    );
}

export default Whatsappbar;
