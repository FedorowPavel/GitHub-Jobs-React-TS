export interface Job {
    id: string,
    title: string,
    company: string,
    company_logo: string,
    company_url: string,
    created_at: string,
    description: string,
    location: string,
    type: string,
    url: string,
}

export interface PaginationInfo {
    array: Job[],
    isGotAllDataFromApi: boolean,
    totalDataItems: number
}

export interface InitJobState {
    jobs: [],
    isLoading: boolean,
    isGotAllJobsFromApi: boolean,
}
