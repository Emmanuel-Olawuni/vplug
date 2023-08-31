
const CartItems = ({cartItem}) => {
const {title , price , quantity } = cartItem
  return (
      <div className="flex h-[100px] flex-col">
       
        <div className="flex flex-col">
          <h4 className="font-bold text-[17px]">{title} </h4>
          <p className="text-[13px]">{quantity} x ${price}</p>
        </div>
      </div>
     
  
  );
};

export default CartItems;
