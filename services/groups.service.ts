import URL from "@/lib/environment";
import { Group } from "@/types/group.type";

const getGroups = async () : Promise<Group[]> => {
    const response = await fetch(`${URL}/groups`, { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération des groupes');
    }
    return response.json();
}

const getGroup = async (name: string) : Promise<Group> => {
    const response = await fetch(`${URL}/groups/${name}`, { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la récupération du groupe');
    }
    return response.json();
}

export { getGroups, getGroup }

