"useClient";
import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import Button from "./Button";

const CopyToClipboard = ({ copyValue }: { copyValue: string }) => {
    const [copyMessage, setCopyMessage] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(copyValue)
            .then(() => {
                setCopyMessage(() => "Successfully copied");
                setTimeout(() => setCopyMessage(() => ""), 2000);
            })
            .catch((err) => {
                setCopyMessage("Failed to copy");
                setTimeout(() => setCopyMessage(() => ""), 2000);
            });
    };

    return (
        <div>
            <Button
                name={copyValue}
                icon={<IoCopy className="text-white" />}
                className="bg-transparent border-4 border-red-500 hover:text-white hover:border-white"
                onClick={copyToClipboard}
            />
            <p className="text-sm">{copyMessage}</p>
        </div>
    );
};

export default CopyToClipboard;
