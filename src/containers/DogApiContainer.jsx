import { connect } from "react-redux";
import DogApi from "../components/DogApi";
import { fetchDogApi, removeDog } from "../services/actions/Actions";

const mapStateToProps = State => ({
    data: State.apiDogItem.data,
})

const mapDispatchToProps = Dispatch => ({
    fetchDog: () => fetchDogApi(Dispatch),
    removeDogImage: (data) => Dispatch(removeDog(data)),
})


export default connect(mapStateToProps,mapDispatchToProps)(DogApi);