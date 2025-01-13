import QuoteBox from "@/components/home/QuoteBox";
const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-csa-tan-100">
      Hello World
      <QuoteBox
        quote="Social, cultural, and service-oriented organization that strives to promote 
                the Chinese American culture throughout the UCR and Riverside communities"
        name="First name last name"
      />
    </div>
  );
};

export default Home;
