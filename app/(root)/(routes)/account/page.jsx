import GroupProvider from "@/lib/providers/group-provider";

const AccountPage = () => {
  return (
    <GroupProvider>
      <h1 className="text-highlight font-medium dark:text-white">
        Account page
      </h1>
    </GroupProvider>
  );
};

export default AccountPage;
