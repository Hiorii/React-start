import React from 'react';
import styles from "../ListContainer/ListContainer.scss";
import ReactHtmlParser from "react-html-parser";

class ListContainer extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{ReactHtmlParser(this.props.title)}</h2>
                    <div className={styles.description}>
                        {ReactHtmlParser(this.props.description)}
                    </div>
                </div>
                <img className={styles.image} src={this.props.image}/>
            </section>
        )
    }
}

export default ListContainer;