
export interface Instance {
    id: number;
    is_cloud: boolean;
    name: string;
    type: string;
    replicas: number;
    autoscaling: number;
    allow_deletion: number;
    backup_periodicity: number;
    url: string;
    username: string;
    password: string;
    status: string;
}
