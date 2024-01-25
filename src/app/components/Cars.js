//components
import Brands from "./Brands";
import CarSldier from "./CarSldier";

export default function Cars() {
  return (
    <section className="h-screen flex items-center" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSldier />
      </div>
    </section>
  );
}
