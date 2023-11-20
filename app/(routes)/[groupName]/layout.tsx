import CategoriesNavigation from "@/components/navigation/categories-navigation";
import { AppDataProvider } from "@/components/providers/app-data-provider";
import { getCategoriesByGroup } from "@/services/categories.service";
import { getGroup } from "@/services/groups.service";

interface GroupLayoutProps {
  children: React.ReactNode;
  params: { groupName: string };
}

const GroupLayout = async ({ children, params: { groupName } }: GroupLayoutProps) => {

  const group = await getGroup(groupName);
  const categories = await getCategoriesByGroup(group.name);

  return (
    <AppDataProvider
      group={group}
      categories={categories}
    >
      <CategoriesNavigation />
      {children}
    </AppDataProvider>
  )
}

export default GroupLayout;