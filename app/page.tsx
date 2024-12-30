import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import StarIcon from "./star.icon";
import { ColorModeButton } from "@/components/ui/color-mode";
const repoLink: string = "https://github.com/NobbyDeveloper/next-chakra-starter"

export default () => {
    return (
        <>
            <Center minH='dvh' flexDirection={"column"} gap={2}>

                <Text>Welcome to your starter</Text>
                <Heading size={'4xl'}>Next.js + ChakraUI V3</Heading>

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