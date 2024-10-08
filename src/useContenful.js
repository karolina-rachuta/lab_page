import {
    React,
    useState,
    useEffect
} from "react";
import {
    createClient
} from "contentful";


const localCache = {};

const useContentful = () => {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");

    const client = createClient({
        space: process.env.REACT_APP_space_id,
        accessToken: process.env.REACT_APP_contentPreviewApi,
    });

    useEffect(() => {
        getData().then((res) => (res)).catch((err) => console.error(err.message));
    }, []);

    const getData = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "componentQuote",
                // select: "fields",
                // order: "fields.internalName"
            });
            console.log(entries.items[0].fields.quote.content[1].value)
            const imgUrlFetch = entries.items[0].fields.image.fields.file.url;
            const dateFetch = entries.items[0].fields.date;
            const titleFetch = entries.items[0].fields.title;
            const contentFetch = entries.items[0].fields.quote;
            // console.log('date', entries.items[0].fields.date);
            // console.log('url', entries.items[0].fields.image.fields.file.url);
            // console.log('title', entries.items[0].fields.title)
            if (localCache.url !== imgUrlFetch) {
                localCache.url = imgUrlFetch;
                setImage(localCache.url);
                // return localCache.url;
            }
            // else {
            //     setImage(localCache.url);
            //     return localCache.url;
            // };

            if (localCache.date !== dateFetch) {
                localCache.date = dateFetch;
                setDate(localCache.date);
                // return localCache.date;
            }
            // else {
            //     setDate(localCache.date);
            //     return localCache.date;
            // };
            if (localCache.title !== titleFetch) {
                localCache.title = titleFetch;
                setTitle(localCache.title);
                // return localCache.title;
            }
            // else {
            //     setTitle(localCache.title);
            //     return localCache.title;
            // }

        } catch (error) {
            throw new Error(`Error fetching background image: ${error.message}`)
        };
    }
    return [image, title, date];

};

export default useContentful;