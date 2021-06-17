export interface IJob {
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
    array: IJob[],
    isGotAllDataFromApi: boolean,
    totalDataItems: number
}

export interface InitJobState {
    jobs: any[],
    isLoading: boolean,
    isGotAllJobsFromApi: boolean,
}
