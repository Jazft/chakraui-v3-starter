import { ColorModeButton } from "@/components/ui/color-mode";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import StarIcon from "./star.icon";
const repoLink: string = "https://github.com/NobbyDeveloper/next-chakra-starter"

export default function App() {
    return (
        <>
            <Center minH='dvh' flexDirection={"column"} gap={2}>

                <Text>Welcome to your starter</Text>
                <Text fontWeight="semibold" textStyle="5xl">Hola</Text>

                <Stack direction={'row'}>

                    <ColorModeButton />
                    <Button title="Give a Star">
                        <a href={repoLink} >
                            <StarIcon />
                        </a>
                    </Button>

                </Stack>
            </Center>

        </>
    );
}