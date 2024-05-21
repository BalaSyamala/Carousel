import { useState } from "react";

import "./App.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const a = [
  "./amazon_imgs/amazon_img1.jpg",
  "./amazon_imgs/amazon_img3.jpg",
  "/amazon_imgs/amazon_img4.jpg",
  "./amazon_imgs/amazon_img5.jpg",
  "./amazon_imgs/amazon_img6.jpg",
  "./amazon_imgs/amazon_img7.jpg",
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          backgroundColor: "pink",
          // height: "1000px",
        }}
      >
        <button
          style={{
            height: "100%",
            // top: "30%",
            left: "0%",
            color: "#007185",
            position: "absolute",
          }}
          onClick={() => {
            if (count === 0) {
              setCount(a.length - 1);
            } else {
              setCount(count - 1);
            }
          }}
        >
          <IoIosArrowBack />
        </button>
        <img width={"1000px"} height={"300px"} src={a[count]} alt="image" />
        <button
          style={{
            height: "100%",
            // top: "30%",
            right: "0%",
            color: "#007185",
            position: "absolute",
          }}
          onClick={() => {
            if (count === a.length - 1) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div>
        {/* <button
          style={{
            width: "150px",
          }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button> */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((e, i) => {
            return <div className={i === count ? "dot active" : "dot"}></div>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
