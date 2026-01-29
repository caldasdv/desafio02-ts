import { Button } from "@chakra-ui/react";

interface IButton {
    onClick: () => void;
    label: string;
}

export const MyButton = ({onClick,label} : IButton) => {
    return (
        <Button onClick={onClick} colorScheme= "orange" size="lg" width='100%' marginTop='5px'>
            {label}
        </Button>
    )
}