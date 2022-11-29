function Profile(props){
    const{src,name,rounded}=props
   const style={
    borderRadius:"50%"
   }
   return
   (
    <>
    <img
     src="https://scontent.fdel47-1.fna.fbcdn.net/v/t39.30808-6/302171767_370474545292710_4380825865059373375_n.jpg?stp=dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=_wGgI6Vv3IkAX_FPZlh&_nc_oc=AQkClSc_M0RRs7g-MFiE1xpDrn5l9EbpEIxxVAyuFxbLDsVZQXSuVJJtIcqpSuEfmCY&_nc_ht=scontent.fdel47-1.fna&oh=00_AfA2liHud3lAwkzTpd4k6PvWvn_tqohvzQCYvqhD0a_rBA&oe=638A550B"
      alt="img not found" 
      width="300px"
      style={style}
      />
    </>
   )
}
export default Profile;