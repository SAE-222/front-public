import GroupProvider from "@/lib/providers/group-provider";

const CartPage = () => {
  return (
    <GroupProvider>
      <h1 className="text-highlight font-medium dark:text-white">Cart page</h1>
    </GroupProvider>
  );
};

export default CartPage;
