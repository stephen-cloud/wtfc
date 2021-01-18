import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from "react"
import SEO from "../components/seo"

function Banner() {
  return (
    <Container centerContent>
      <Text >No, seriously dude... just</Text>
      <Text fontSize="6xl">Write</Text>
      <Text fontSize="6xl">The</Text>
      <Text fontSize="6xl">Fucking</Text>
      <Text fontSize="6xl">Code</Text>
    </Container>
  )
}

function Cards() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="10">
      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">Stop meeting, start coding</Text>
        <Text>WTFC is all about going for it. </Text>
        <Text>Some people like to have meetings to decide things where the only outcome is to meet again.</Text>
        <Text>Some people are really good at meetings so learn from them.</Text>
        <Text as="i">Be the person who writes code instead of bad meetings.</Text>
      </VStack>
      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">Permission vs. forgiveness</Text>
        <Text>If something needs doing and you know how, show your skeptics proof,
          gather people around the idea, and do it.</Text>
        <Text>If what you did totally works but people get mad anyway,
          that's on them.</Text>
        <Text as="i">Be the person who doesn't take it personally.</Text>
      </VStack>
      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">Line up advocates</Text>
        <Text>Your teammates, your boss, their boss, whoever's interested.
          When it's time to roll out what you did, you'll already have support.</Text>
        <Text as="i">Be the go-to collaborator.</Text>
      </VStack>
      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">Accept "no"</Text>
        <Text>What you did either isn't that great after all,
        someone beat you to the punch, or the team's
          just determined to do it their way instead.</Text>
        <Text as="i">Be the person who picks something new and starts afresh.</Text>
      </VStack>
    </SimpleGrid>
  )
}
function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <VStack spacing="8">
        <Banner />
        <Cards />
      </VStack>
    </>
  )
}

export default IndexPage
