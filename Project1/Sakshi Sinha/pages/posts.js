"use client";
import {Heading, Container, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Works = () => (
    <Layout>
        <Container>
        <Heading as="h3" fontSize={20} mb={4}>
        Posts
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
                Currently nothing to tell about....
            </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works