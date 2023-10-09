import { Button } from "@chakra-ui/react";
import { globalStyles } from "../../them/styles.js";
interface ButtonProp {
    label: any;
    isSubmitting?: any;
}

const LoginButton = ({ label, isSubmitting }: ButtonProp) => {
    return (
        <Button
            bgColor={globalStyles.colors.mainColor}
            type={"submit"}
            isLoading={isSubmitting}
            disabled={isSubmitting}
            color="white"
            fontSize={"18"}
            width={"full"}
            borderRadius={"2xl"}
            fontWeight={"black"}
        >
            {label}
        </Button>
    );
};

export default LoginButton;