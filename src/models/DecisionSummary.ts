/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DecisionSummary = {
    id: string;
    platform: string;
    platform_client: string;
    body_name?: (string | null);
    meeting_date?: (string | null);
    matter_file?: (string | null);
    matter_type?: (string | null);
    matter_status?: (string | null);
    /**
     * Summary built only from the city's structured fields (case type, status, zoning, unit and area counts, designated use fields); no term is taken from free-text descriptions. May be incomplete: an omitted use or count does not mean the source lacks it.
     */
    scope_summary?: (string | null);
    /**
     * Source and limits of scope_summary.
     */
    scope_summary_note?: string;
    action_raw?: (string | null);
    outcome: string;
    passed?: (boolean | null);
    vote_tally?: (string | null);
    votes_yes?: (number | null);
    votes_no?: (number | null);
    votes_abstain?: (number | null);
    votes_absent?: (number | null);
    mover?: (string | null);
    seconder?: (string | null);
    is_land_use: boolean;
    land_use_type?: (string | null);
    extracted_case_numbers?: Array<string>;
    address_street?: (string | null);
    address_state: string;
    planning_case_id?: (string | null);
    link_method?: (string | null);
    agenda_url?: (string | null);
    minutes_url?: (string | null);
    jurisdiction_id?: (string | null);
    source: string;
    source_id: string;
};

