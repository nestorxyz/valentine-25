import mixpanel from 'mixpanel-browser';

const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN || 'valentine';

mixpanel.init(mixpanelToken);

export default mixpanel;
