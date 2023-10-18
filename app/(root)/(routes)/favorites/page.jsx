import GroupProvider from "@/lib/providers/group-provider";

const FavoritesPage = () => {
  return (
    <GroupProvider>
      <h1 className="text-highlight font-medium dark:text-white">
        Favorites page
      </h1>
    </GroupProvider>
  );
};

export default FavoritesPage;
