// 872576874821671

const cloud_name = "de5czvtkq";
const upload_preset = "blue-collar-gigs";

export const uploadToCloudinary = async (pic, fileType) => {
    try {
        if (!pic || !fileType) {
            throw new Error("Missing pic or fileType");
        }

        const data = new FormData();
        data.append("file", pic);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`, {
            method: "POST",
            body: data
        });

        if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
        }

        const fileData = await response.json();
        //sconsole.log(fileData);
        return fileData.url;
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
};



// import {Cloudinary} from "@cloudinary/url-gen";

// const App = () => {
//   const cld = new Cloudinary({cloud: {cloudName: 'de5czvtkq'}});
// };