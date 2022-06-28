import { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const errorBoundaryClasses = {
  margin: '0 auto',
  width: '570px',
  height: '100%',
  padding: '25px',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.8)',
  background: '#232222',
  zIndex: '10',
  position: 'relative',
};

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);

    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={errorBoundaryClasses}>
          <ErrorMessage />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
