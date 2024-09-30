interface ImageProps {
  url: string;
}

const MenuImage = ({ url }: ImageProps) => {
  return (
    <>
      <div className="text-gray-600 bg-slate-50 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-50 font-medium text-xs rounded-tl-2xl rounded-br-2xl  px-5 py-2.5 text-center me-2 mb-2 h-56 w-44">
        <div className="w-28 h-24 mr-4">
          <img
            src={url}
            alt="Dosa"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <p className="text-center font-bold mt-3">Pasta</p>
          <p className="p-1 mt-2 font-light">
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
            tempor{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuImage;
