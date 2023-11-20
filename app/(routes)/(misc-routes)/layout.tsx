import { getGroups } from "@/services/groups.service";
import { getCategoriesByGroup } from "@/services/categories.service";
import { notFound } from "next/navigation";
import CategoriesNavigation from "@/components/navigation/categories-navigation";
import { AppDataProvider } from "@/components/providers/app-data-provider";

interface MiscRoutesLayoutProps {
  children: React.ReactNode;
}

const MiscRoutesLayout = async ({ children }: MiscRoutesLayoutProps) => {

  const groups = await getGroups();
  const defaultGroup = groups.find((group) => group.default);

  if (!defaultGroup)
    notFound();

  const categories = await getCategoriesByGroup(defaultGroup.name);

  return (
    <AppDataProvider
      group={defaultGroup}
      categories={categories}
    >
      <CategoriesNavigation />
      <div className="w-full p-8">
        {children}
      </div>
    </AppDataProvider>
  )
}

export default MiscRoutesLayout;