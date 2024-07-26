import React, { useEffect, useState } from "react";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface MyComponentProps {
  setinput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
}

const ImageGrid: React.FC<MyComponentProps> = ({ setinput, input }) => {
  // State to store photos
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch photos from API on component mount
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setPhotos(data.photos);
      } catch (error) {
        setError("Failed to fetch photos");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-3 h-96 overflow-auto">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="cursor-pointer"
          onClick={() => setinput(photo.url)}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className={`w-40 h-40 border-4  ${
              input === photo.url ? "border-4 border-blue-500" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
