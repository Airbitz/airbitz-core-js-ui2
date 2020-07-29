// @flow

import { connect } from 'react-redux'

import { validateUsername } from '../../../common/actions/CreateAccountActions.js'
import s from '../../../common/locales/strings.js'
import { type Dispatch, type RootState } from '../../../types/ReduxTypes'
import { FormField } from '../../components/common/'

type OwnProps = {
  onFinish(): void
}
export const mapStateToProps = (state: RootState) => {
  return {
    value: state.create.username,
    error: state.create.usernameErrorMessage,
    label: s.strings.username,
    returnKeyType: 'go',
    autoCorrect: false,
    autoFocus: true // ownProps.autoFocus,
  }
}
export const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  return {
    onChangeText: (data: string) => dispatch(validateUsername(data)),
    onSubmitEditing: ownProps.onFinish
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormField)
