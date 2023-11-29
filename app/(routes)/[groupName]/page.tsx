import Container from "@/components/container/container";
import Products from "@/components/product/products";
import ItemsNavigation from "@/components/section/items-navigation";
import ItemsSlider from "@/components/section/items-slider";
import SectionLabel from "@/components/section/section-label";

const GroupPage = () => {
  return (
    <>
      <div className="border-b md:border-none">
        <Container className="space-y-4">
          <SectionLabel />
          <ItemsSlider />
        </Container>
      </div>
      <Container className="flex justify-center pt-0">
        <div className="hidden w-[215px] md:block">
          <ItemsNavigation />
        </div>
        <div className="flex-grow mt-4 md:mt-0">
          <Products />
        </div>
      </Container>
    </>
  );
};

export default GroupPage;
