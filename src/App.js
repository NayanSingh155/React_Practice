import Avtaar from "./components/Avtaar";
import Button from "./components/Button";
import "./styles.css";

export default function App() {
  const User=[
    {
      id:1,
      name:"Baba Bhola Shah",
      src:"https://scontent.fdel47-1.fna.fbcdn.net/v/t39.30808-6/240390673_4391727077560488_3799832492171633510_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=PcuOuCA3U2gAX_pVQL9&_nc_ht=scontent.fdel47-1.fna&oh=00_AfCvF_SosrXnvdIjd9jkZM4pkzbSr7WQwSi-SZqpvCKBXg&oe=638B4A96",
      rounded:true,
    },

    {
      id:1,
      name:"Baba Bhola Shah",
      src:"https://scontent.fdel47-1.fna.fbcdn.net/v/t39.30808-6/302171767_370474545292710_4380825865059373375_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=_wGgI6Vv3IkAX_FPZlh&_nc_oc=AQkClSc_M0RRs7g-MFiE1xpDrn5l9EbpEIxxVAyuFxbLDsVZQXSuVJJtIcqpSuEfmCY&_nc_ht=scontent.fdel47-1.fna&oh=00_AfA2liHud3lAwkzTpd4k6PvWvn_tqohvzQCYvqhD0a_rBA&oe=638A550B",
      rounded:false,
    },

    {
      id:1,
      name:"Baba Bhola Shah",
      src:"https://scontent.fdel47-1.fna.fbcdn.net/v/t39.30808-6/283246949_5259250330808154_1997895051470836589_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Gh9gEoVUoF4AX-qVXuX&_nc_ht=scontent.fdel47-1.fna&oh=00_AfAuWV5SievLLOY8vB2P4A4IjA4kyptLlWE1eorxY99SrA&oe=638BE694",
      rounded:true,
    }
  ]
  const AvtarUser=User.map((el)=>(
    <Avtaar
    key={el.id}
    name={el.name}
    src={el.src}
    rounded={el.rounded}
  />
  ));
  return (
    <>
    <div className="App">
      <h1 style={{color:"green"}}>Khanquaah Bholaiya</h1>
      {AvtarUser}
      <Button
       text="click me"
       onClick={()=>alert("????")}
      //  onClick={()=>console.log("clicked")}

       />
    </div>
    </>
  );
}
