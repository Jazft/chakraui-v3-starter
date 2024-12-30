"use client"

import {
    ColorModeProvider,
    type ColorModeProviderProps
} from "@/components/ui/color-mode"
import { ChakraProvider, Theme } from "@chakra-ui/react"
import { system } from "./theme"


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider attribute="class" disableTransitionOnChange {...props} />
    </ChakraProvider>
  )
}