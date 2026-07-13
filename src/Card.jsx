function Card(props) {
  return (
      <div style={{
        border:"2px pink solid ",
        textAlign:"center",
        borderRadius:"20px" ,
        margin:"20px",
        padding:"20px",
        width:"250px",
        backgroundColor:"mistyrose" }} >
       <img height={250} width={250}  src={props.image} alt="" />
        <h2 style={ {color:"salmon"}}>{props.title}</h2>
        <h3 style={{color:"rosybrown"}}>Price:{props.price}</h3>
    
    </div>
  )
}

export default Card