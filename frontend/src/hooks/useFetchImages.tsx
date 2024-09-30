import axios from "axios";
import { useState, useEffect } from "react";

export interface Image {
  url: string;
}

const useFetchImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const promises = [];
        for (let i = 1; i <= 15; i++) {
          const url = `https://foodish-api.com/images/dosa/dosa${i}.jpg`;
          promises.push(axios.get(url));
        }
        const responses = await Promise.all(promises);
        const images = responses.map((response) => {
          const url = response.config.url;
          return { url: url !== undefined ? url : "" };
        });
        setImages(images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return { images, loading };
};

export default useFetchImages;
