import styles from './Mainpage.module.css'
const Mainpage = (props) => {

    const {text = ''} = props;
    return(
        <div className={styles.image}>
            <h1>KINOKARNALOG</h1>
            <h3>Весь мир - кино, а люди в нём актёры</h3>
            <img alt=""  src="https://digimark.pro/wp-content/uploads/2019/01/tmb_130233_3400-1.jpg"></img>
            
            
        </div>
    )
}

export {Mainpage};