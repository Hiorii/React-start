import React from "react"
import styles from './Menu.scss';

class MenuInner extends React.Component {
    state = {
        title: this.props.title || '',
    }

    render() {
        console.log(this.props.showItem)
        return (
            <p className={styles.menuInnerLink} onChange={this.props.showItemc}>{this.state.title}</p>
        )
    }
}

export default MenuInner