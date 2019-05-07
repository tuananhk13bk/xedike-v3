import { connect } from "react-redux";
import TripsListSteps from "../components/TripsList/TripsListSteps";

const mapStateToProps = (state: any) => ({
  tripIdOnSelect: state.tripReducer.tripIdOnSelect
});

export default connect(
  mapStateToProps,
  null
)(TripsListSteps);
