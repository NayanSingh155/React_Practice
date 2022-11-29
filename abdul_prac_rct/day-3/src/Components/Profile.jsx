// import React from "react"


function Profile(props) {
  const { src, name, rounded } = props
  const styles = {
    borderRadius: rounded ? "50%" : "16px"
  }
  return (

    <div>
      <img
        src={src}
        alt="profile-pic"
        width="200px"
        style={styles} />

      <h1 style={{ color: "red" }}>{name}</h1>
    </div>
  );

}
export default Profile;