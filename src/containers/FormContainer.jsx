import {connect} from 'react-redux'
import Form from '../components/Form'
import { addToForm } from '../services/actions/Actions'

const mapStateToProps=state=>({
    data: state.formItem
})

const mapDispatchToProps=Dispatch=>({
    addToFormHandler:data=>Dispatch(addToForm(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Form);
