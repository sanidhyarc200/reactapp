const Ui = () => {
    return(
        <div style={{display:"flex"
        , alignItems: "center",
    justifyContent: "center"
,height:"100vh"}}>

<div onClick={console.log("clicked")} style={{height: "30px",
         width: "80px" ,background: "orange" ,
          border: "2px solid black" 
        ,borderRadius:"12%", cursor:"pointer"
         }
        }>
             {/* <button>Hello</button> */}
             welcome
        </div>
        </div>
        
    )
}
export default Ui