export async function axeAccessibilityReporter() {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        const axe = await import('@axe-core/react');
        const ReactDOM = await import('react-dom');
        const React = await import('react');
        axe.default(React.default, ReactDOM.default, 1000);
    }
}