import URL from "@/lib/environment";
import { Group } from "@/types/group.type";

const getGroups = async (): Promise<Group[]> => {
  const response = await fetch(`${URL}/groups`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(
      "Une erreur est survenue lors de la récupération des groupes"
    );
  }
  const data = await response.json();
  return data.map((current: any) => ({
    id: current.id_categories,
    name: current.nom,
    label: current.label,
    default: true,
  }));
};

const getGroup = async (name: string): Promise<Group> => {
  const response = await fetch(`${URL}/groups/${name}`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(
      "Une erreur est survenue lors de la récupération du groupe"
    );
  }
  const array = await response.json();
  if (array.length > 1) {
    throw new Error("Plusieurs groupes ont été trouvés");
  }
  const group = array[0];
  return {
    id: group.id_categories,
    name: group.nom,
    label: group.label,
  };
};

export { getGroups, getGroup };
