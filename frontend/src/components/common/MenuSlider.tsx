import { ImageContext } from "../../context/imageContextProvider";
import MenuImage from "../../assets/menuImage";
import { useContext } from "react";

const MenuSlider = () => {
  const { images, loading } = useContext(ImageContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-nowrap overflow-x-auto">
      {images.map((image, index) => (
        <MenuImage key={index} url={image.url} />
      ))}
    </div>
  );
};

export default MenuSlider;
