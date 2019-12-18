import { RootState } from 'global/state';
import * as React from 'react';
import { connect } from 'react-redux';
import { WrappedMessage } from 'utils/intl';
import { submitRegistration } from '../../actions';
import { RegistrationPage } from '../RegistrationPage';
import { RegistrationSteps } from 'global/constants';
import { RedirectToCorrectStep } from 'registration/components';
import messages from './displayMessages';
import './styles.scss';

interface ActionProps {
  submitRegistration: Function;
}

interface Props extends ActionProps  {
  currentRegistrationStep: RegistrationSteps;
}

interface State {}

@connect<{}, ActionProps, {}, Props, RootState>((state: RootState) => ({
  ...state.registration
}), {
  submitRegistration
})
export class CongratulationsPage extends React.PureComponent<Props, State> {
  public render() {
    return (
      <RegistrationPage title="Pro & Teacher Account" currentStep={4}>
        <RedirectToCorrectStep
          currentPageStep={4}
          currentRegistrationStep={this.props.currentRegistrationStep}
        />
        <div className="congrats-page">
          <h1>
            <WrappedMessage messages={messages} id="congrats" />
          </h1>
          <p>
            <WrappedMessage messages={messages} id="congratsMessage" />
          </p>
          <p>
            <WrappedMessage messages={messages} id="congratsMessage2" />
          </p>
        </div>
      </RegistrationPage>
    );
  }
}
