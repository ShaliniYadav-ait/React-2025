import * as React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        logErrorToMyService(
            error,
            // Example "componentStack":
            //   in ComponentThatThrows (created by App)
            //   in ErrorBoundary (created by App)
            //   in div (created by App)
            //   in App
            info.componentStack,
            // Warning: `captureOwnerStack` is not available in production.
            React.captureOwnerStack(),
        );
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;