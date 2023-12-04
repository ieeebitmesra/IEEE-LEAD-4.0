'use client'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItems } from '../components/grid-item'
import Layout from '../components/layouts/article'
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/183305525/IEEE-LEAD-40"
              title="LEAD 4.0"
              thumbnail="/images/works/lead_4.0.png"
            >
              Created for my club IEEE. For the LEAD 4.0 event. Where we, the
              K22 acted as our personal mentors for 3-weeks to help us create
              our very first set of developement projects.
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/171117395/FinanceClubWorkshop"
              title="Finance Club"
              thumbnail="/images/works/finance.png"
            >
              A template for the finance workshop organised by the Finance Club
              of our club.
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/186001355/Dramanite-Poster"
              title="Dramanite"
              thumbnail="/images/works/dark_knight.png"
            >
              A template for annual Dramanite event by our drama club, Ehsaas.
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/171117219/TecheveBITMesra"
              title="Technical Event"
              thumbnail="/images/works/blue_future.png"
            >
              A template for a Technical Event.
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/186001017/Raksha-Bandhan"
              title="Rakhsha Bandhan"
              thumbnail="/images/works/Rakhi.png"
            >
              Created for my club IIChE. For the Rakhsha Bandhan event.
            </WorkGridItems>
          </Section>

          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/186001805/Night-Party-Poster"
              title="Night Club Party"
              thumbnail="/images/works/night__club_party.png"
            >
              Created for my music club, Dhwani. A showcase of my designing
              skills.
            </WorkGridItems>
          </Section>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/186001185/Govardhan-Puja-Poster"
              title="Govardhan Puja"
              thumbnail="/images/works/govardhan.png"
            >
              Created for my club IIChE. For the Govardhan Puja.
            </WorkGridItems>
          </Section>
          <Section>
            <WorkGridItems
              src="https://www.behance.net/gallery/171117355/BITSummerMusicFest"
              title="Summer Music Festival"
              thumbnail="/images/works/music_festival.png"
            >
              A template designed for my music club, Dhwani. For the Summer
              Music Festival.
            </WorkGridItems>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
