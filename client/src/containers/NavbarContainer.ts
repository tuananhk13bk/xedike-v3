import { connect } from "react-redux";
import {
  toggleLoginModal,
  toggleRegisterModal
} from "../actions/auth/authActions";

import NavbarLayout from "../layout/NavbarLayout";

const mapDispatchToProps = {
  toggleLoginModal,
  toggleRegisterModal
};

export default connect(
  null,
  mapDispatchToProps
)(NavbarLayout);
