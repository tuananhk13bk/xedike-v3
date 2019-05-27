import { connect } from "react-redux";
import { toggleRegisterModal } from "../actions/auth/authActions";
import RegisterModal from "../components/auth/RegisterModal";

const mapStateToProps = (state: any) => ({
  registerIsOpen: state.authReducer.registerIsOpen
});

const mapDispatchToProps = { toggleRegisterModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterModal);
