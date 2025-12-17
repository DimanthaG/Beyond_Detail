import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return (
                <div style={{ padding: '20px', textAlign: 'center', color: '#ff4d4f' }}>
                    <h2>Something went wrong.</h2>
                    <p>We're having trouble loading this section. Please refresh the page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
