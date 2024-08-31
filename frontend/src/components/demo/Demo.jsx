import axios from "axios";
import { useEffect, useState } from "react";

function Demo() {
    const [name, setname] = useState("");

    useEffect(() => {
        const userData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ping`);
                setname(response.data.status);
            } catch (error) {
                console.error("Error fetching data:", error);
                setname("Error loading name");
            }
        };
        userData();
    }, []);

    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
}

export default Demo;
