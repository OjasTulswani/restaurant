import { createContext, ReactElement} from "react";
import useFetchImages from "../hooks/useFetchImages";
import { Image } from "../hooks/useFetchImages";

interface ImageContext {
    images : Image[];
    loading : boolean;
}

const ImageContext = createContext<ImageContext>({
    images : [],
    loading : false,
})

type ChildrenType = { children?: ReactElement | ReactElement[] };

const ImageProvider = ({children} : ChildrenType) =>{
    const { images, loading } = useFetchImages();

    return (
        <ImageContext.Provider value={{images, loading}} >
            {children}
        </ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}