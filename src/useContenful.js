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
    const [newsList, setNewsList] = useState([]);

    const client = createClient({
        space: process.env.REACT_APP_space_id,
        accessToken: process.env.REACT_APP_contentPreviewApi,
    });

    useEffect(() => {
        getAllEntries().then((res) => setNewsList(res)).catch((err) => console.error(err.message));
    }, []);

    const getAllEntries = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "news",
                order: "-sys.createdAt"
            });

            const contentFetch = entries;
            console.log(contentFetch)
            if (localCache.entries !== contentFetch) {
                localCache.entries = contentFetch;
                return localCache.entries;
            } else {
                setNewsList(localCache.entries);
                return localCache.entries;
            };

        } catch (error) {
            throw new Error(`Error fetching background image: ${error.message}`)
        };
    }
    return [newsList];

};

export default useContentful;