import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-ghost-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-ghost'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Grumpy's Website" />
        <meta name="author" content="Noppakorn Kaewsalabnil" />
        <meta name="author" content="Grumpy" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Noppakorn Kaewsalabnil" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@grumpy" />
        <meta name="twitter:creator" content="@grumpy" />
        <meta
          name="twitter:image"
          content="https://github.com/PunGrumpy/Grumpy-Website/blob/main/public/card.png?raw=true"
        />
        <meta property="og:site_name" content="Noppakorn Kaewsalabnil" />
        <meta name="og:title" content="Noppakorn Kaewsalabnil" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/PunGrumpy/Grumpy-Website/blob/main/public/card.png?raw=true"
        />
        <title>Grumpy - Website</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
