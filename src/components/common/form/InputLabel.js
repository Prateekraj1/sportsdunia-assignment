import React from "react";

const InputLabel = ({ children, id }) => {
    return (
        <label className={`inline-block text-[14px] leading-[1.57142857] font-medium text-n700 mb-[4px] dark:text-gray-300`} htmlFor={id}>
            {children}
        </label>
    );
};

export default InputLabel;