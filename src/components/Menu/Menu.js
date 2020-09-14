// import React from 'react';
// import styles from './Menu.scss';
// import MenuInner from './MenuInner';
//
// class Menu extends React.Component {
//   state = {
//     columns: this.props.columns || [],
//   }
//   //
//   // showItem(item) {
//   //   this.setState(state => (
//   //     {
//   //       columns: [
//   //         ...state.columns,
//   //         {
//   //           key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
//   //           title: this.props.title,
//   //           icon,
//   //           cards: [],
//   //         },
//   //       ],
//   //     }
//   //   ));
//   // }
//
//   render() {
//     console.log(this.state.columns);
//     return (
//       <div className={styles.component}>
//         <div className={styles.menuOuter}>
//           <button className={styles.menuOuterLink}>{this.props.title} v</button>
//           <div className={styles.menuInner}>
//             {this.state.columns.map(({key, ...columnProps}) => (
//               <MenuInner
//                 key={key} {...columnProps}
//                 showItem={this.showItem}/>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Menu;
//
