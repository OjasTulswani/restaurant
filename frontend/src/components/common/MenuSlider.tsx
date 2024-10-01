// import { useImageContext } from "../../context/imageContextProvider";
import MenuImage from "../../assets/MenuImage";
// import { useContext } from "react";
import useFetchImages from "../../hooks/apis/fetchImages/useFetchImages";

const MenuSlider = () => {
  // const { images, loading } = useContext(ImageContext);
  const {loading, images} = useFetchImages();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-nowrap overflow-x-auto scrollbar-hidden">
      {images.map((image, index) => (
        <MenuImage key={index} url={image.url} />
      ))}
    </div>
  );
};

export default MenuSlider;
