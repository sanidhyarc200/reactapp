import { useEffect } from "react";
import { useState } from "react";

const UEWD = () => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        console.log("mounting");
    }, []);

    useEffect(() => {
        console.log("updating : ", search );
    },[search]);

    return (
        <>
        <InputBox value={search} onChange={(name, value) => setSearch(value)}/>
        <p>search Key: {search}</p>
        </>
    );
};
export default UEWD;