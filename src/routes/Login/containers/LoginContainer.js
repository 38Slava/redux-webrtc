import { connect } from 'react-redux'
import { login } from '../modules/login'
import LoginView from '../components/LoginView'

const mapActionCreators = {
  login
}

export default connect(null, mapActionCreators)(LoginView)
