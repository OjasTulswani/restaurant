import homeImg from "../assets/home.svg"
const home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div className=" w-96 mt-40">
            <img src={homeImg} alt =" Image "  />
        </div>
      </div>
    </>
  )
}

export default home
