import { connect } from "react-redux";
import { toggleLoginModal } from "../actions/auth/authActions";
import LoginModal from "../components/auth/LoginModal";

const mapStateToProps = (state: any) => ({
  loginIsOpen: state.authReducer.loginIsOpen
});

const mapDispatchToProps = { toggleLoginModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
