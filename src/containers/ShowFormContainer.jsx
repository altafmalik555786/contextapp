import {connect} from 'react-redux'
import ShowForm from '../components/ShowForm'

const mapStateToProps=state=>({
    data: state.formItem
})

const mapDispatchToProps=Dispatch=>({
})


export default connect(mapStateToProps, mapDispatchToProps)(ShowForm);
