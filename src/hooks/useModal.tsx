import React, { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen((prevState) => !prevState);
    }

    return {
        isOpen,
        handleModal
    };
}

export default useModal;