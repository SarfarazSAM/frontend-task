import Card from "./Card";

const Otheroffers = () => {
  return (
    <div className="mb-40 mx-auto">
      <h1 className="text-gray-400 text-2xl font-semibold mb-4">
        Other Adidas offers
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <Card text="Upto 20% cashback" />
        <Card text="Buy 2 get 1 free" />
        <Card text="Upto 20% cashback" />
        <Card text="Spend $100 get 15% off" />
        <Card text="Free shipping on all orders" />
        <Card text="Spend $100 get 15% off" />
      </div>
    </div>
  );
};

export default Otheroffers;
