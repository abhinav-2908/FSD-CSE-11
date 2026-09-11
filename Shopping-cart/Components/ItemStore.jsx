import Items from './Items'
import "./Items.css"
const ItemStore = () => {
  const itemData = [
    {title:"Book", Price:"250", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7T-VewYCrK_M_qX_lWsk8dFpirPxiSZCIWmOSAVvPjg&s=10"},
    {title:"Shoes", Price:"300", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOMN-lX-1gCW7X_Qf4oiGG0kTVQQbJAZcoMC5mDBsVIRq_3ufW_WSD5UF&s=10"},
    {title:"EarBuds", Price:"300", image:"https://rukminim3.flixcart.com/image/480/640/xif0q/headphone/s/6/d/tws-bluetooth-earbuds-true-wireless-headphone-with-magsafe-original-imahhcwxuxnyzgj6.jpeg?q=90"},
    {title:"Cooker", Price:"400", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutahhcnuBJksygWaYIoYKfwTm6xKeWg-ugIkHNO7YHQ&s=10"},
    {title:"Bike", Price:"250000", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA2nE3onrJ1h9ImBOcMMt-BinVgOKSv1B4qkPvBvnjg&s"},
  ]
  return(
      <div className='itemss'>
          {itemData.map((book,i)=> {
            return <Items key={i} props={book} />;
        })}
      </div>
  )
}
export default ItemStore;