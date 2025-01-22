import {$host, $authHost} from "./index";


export const create = async (forum) => {
    const {data} = await $authHost.post('api/forum/create', forum);
    return data;
}

export const getAll = async () => {
    const {data} = await $host.get('api/forum/get');
    console.log({data})
    return data;
}

export const fetchOneForum = async (id) => {
    const {data} = await $host.get('api/forums/' + id);
    return data;
}