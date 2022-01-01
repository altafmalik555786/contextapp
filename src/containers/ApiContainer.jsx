import {connect} from 'react-redux'
import ApiGet from '../components/ApiGet'
import { fetchApi } from '../services/actions/Actions'
const mapStateToProps=state=>({
    apidata: state.apiItem.newData ,
})

const mapDispatchToProps=Dispatch=>({
    fetchPost:()=>fetchApi(Dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ApiGet);
