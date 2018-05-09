import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp} from './action';

const mapDispatchToProps = dispatch => ({
	thumbUp: (id) => dispatch(thumbUp(id))
});

export default connect(null, mapDispatchToProps)(Comment);