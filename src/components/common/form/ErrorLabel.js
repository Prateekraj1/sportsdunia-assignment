import { AlertCircleIcon } from "@/components/icons";
import React from "react";

const ErrorLabel = ({ children }) => {
    return (
        <label className="text-red-500 text-[14px] flex items-center gap-[4px] w-fit text-r500 mt-[8px] mb-0">
            <AlertCircleIcon width={16} height={16} className="text-[red]"/>
            {children}
        </label>
    );
};

export default ErrorLabel;