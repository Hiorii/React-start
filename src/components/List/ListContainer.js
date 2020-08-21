import {connect} from 'react-redux';
import List from './List';
import {createActionAddColumn } from '../../redux/columnRedux';

const mapStateToProps = state => ({
  columns: state.columns,
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);