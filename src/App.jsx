import { useState } from "react";


//props
function Content(props){
    return <h3 style={{color: "green"}}>{props.text}</h3>
}






function App() {


const [like,setLike] = useState(0);



    return (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://randomuser.me/api/portraits/men/25.jpg"
          alt=""
          style={{ borderRadius: "50%", display: "block", margin: "0 auto" }}
        />
        <Content  text ="이름: 홍길동" />
        <Content  text ="성별: 여자" />
        <Content  text ="소개: 안녕하세요 저는 홍길동입니다. 웹개발자가 되고싶은 사람입니다." />
        <button style={{ 
          color: "blue", 
          padding: "10px 20px", 
          fontSize: "14px",
          cursor: "pointer", 
          marginTop: "10px",
          border: "2px solid red",
          borderRadius: "5px", // Changed from 50% to 5px for rectangular shape
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0 auto"
        }}
        onClick={()=>setLike(like+1)}
        >

            
          <span>{like}</span>
          좋 아 요
        </button>
      
      </div>
    );
  }

  export default App