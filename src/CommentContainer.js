import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUp, thumbDown, removeComment, editComment} from './action';

const mapDispatchToProps = dispatch => ({
	thumbUp: (id) => dispatch(thumbUp(id)),
	thumbDown: (id) => dispatch(thumbDown(id)),
	removeComment: (id) => dispatch(removeComment(id)),
	editComment: (text, id) => dispatch(editComment(text, id))
});

export default connect(null, mapDispatchToProps)(Comment);