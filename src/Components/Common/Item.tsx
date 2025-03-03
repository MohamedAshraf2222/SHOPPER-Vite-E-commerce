const Item = ({ product }: any) => {
  console.log(product);

  return (
    <div className="w-[280px] hover:scale-[1.05] hover:transition-all hover:duration-[600ms] cursor-pointer">
      <img src={product.image} alt="" />
      <p className="my-1.5">{product.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-lg font-semibold">
          ${product.new_price}
        </div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through">
          ${product.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
