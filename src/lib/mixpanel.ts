import mixpanel from 'mixpanel-browser';

const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN || 'valentine';

console.log('mixpanelToken', mixpanelToken);

mixpanel.init(mixpanelToken);

export default mixpanel;
