/** @public */
export type PagerDutyIncident = {
    id: string;
    title: string;
    status: string;
    html_url: string;
    assignments: [
        {
        assignee: PagerDutyUser;
        },
    ];
    service: PagerDutyService;
    created_at: string;
}

/** @public */
export type PagerDutyUser = {
    id: string;
    summary: string;
    email: string;
    html_url: string;
    name: string;
    avatar_url: string;
};

/** @public */
export type PagerDutyChangeEvent = {
    id: string;
    integration: PagerDutyIntegration[];
    source: string;
    html_url?: string;
    links: [
        {
            href: string;
            text: string;
        },
    ];
    summary: string;
    timestamp: string;
}

/** @public */
export type PagerDutyService = {
    id: string;
    name: string;
    description?: string;
    escalation_policy: PagerDutyEscalationPolicy; 
    alert_creation?: string;
    incident_urgency_rule?: PagerDutyIncidentUrgencyRule;
    integrations?: PagerDutyIntegration[];
    teams?: PagerDutyTeam[];
    status?: string;
    type?: string;
    summary?: string;
    self?: string;
    html_url: string;
}

/** @public */
export type PagerDutyEscalationPolicy = {
    id: string;
    name: string;
    type?: string;
    summary?: string;
    self?: string;
    html_url?: string;
}

/** @public */
export type PagerDutyIncidentUrgencyRule = {
    type: string;
    urgency: string;
}

/** @public */
export type PagerDutyIntegration = {
    id: string;
    type: string;
    summary?: string;
    self?: string;
    html_url?: string;
    name?: string;
    service?: PagerDutyService;
    created_at?: string;
    vendor?: PagerDutyVendor;
    integration_key?: string;
}

/** @public */
export type PagerDutyTeam = {
    id: string;
    type?: string;
    summary?: string;
    self?: string;
    html_url?: string;
}

/** @public  */
export type PagerDutyOnCall = {
    user: PagerDutyUser;
    escalation_level: number;
}

/** @public */
export type PagerDutyOnCallUsersResponse = {
    users: PagerDutyUser[];
}

/** @public */
export type PagerDutyVendor = {
    id: string;
    type?: string;
    summary?: string;
    self?: string;
    html_url?: string;
}

/** @public */
export type PagerDutyServicesResponse = {
    services: PagerDutyService[];
};

/** @public */
export type PagerDutyServiceResponse = {
    service: PagerDutyService;
};

/** @public */
export type PagerDutyIncidentsResponse = {
    incidents: PagerDutyIncident[];
};

/** @public */
export type PagerDutyChangeEventsResponse = {
    change_events: PagerDutyChangeEvent[];
};

/** @public */
export type PagerDutyOnCallsResponse = {
    oncalls: PagerDutyOnCall[];
};

/** @public */
export type PagerDutyIntegrationResponse = {
    integration: PagerDutyIntegration;
}

/** @public */
export type PagerDutyEscalationPoliciesResponse = {
    escalation_policies: PagerDutyEscalationPolicy[];
    limit?: number;
    offset?: number;
    more?: boolean;
    total?: number;
};

/** @public */
export type PagerDutyAbilitiesResponse = {
    abilities: string[];
};

/** @public */
export class HttpError extends Error {
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }

    status: number;
}

/** @public */
export type PagerDutyOAuthConfig = {
    clientId: string;
    clientSecret: string;
    region?: string;
    subDomain: string;
}
