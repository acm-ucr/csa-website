import NotFound from "@/components/NotFound";
import Lantern from "@/components/404Lanterns";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <NotFound />
      <Lantern />
    </div>
  );
};

export default NotFoundPage;
