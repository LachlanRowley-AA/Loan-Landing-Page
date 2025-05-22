'use client';

import { Text, Title, Image, Flex, Grid } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../public/AA_Dark_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';
import { motion } from 'motion/react'
import { useMediaQuery } from '@mantine/hooks';



export function KitchenWelcome() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          justify="center"
          align="center"
          pt="md"
          wrap="wrap" // This enables wrapping on smaller screens
          gap="md"    // Optional: adds space between images
        >
          <NextImage
            src={image}
            alt="Logo"
            style={{
              maxWidth: '80vw',
              height: 'auto',
              marginRight: '2em',
              flexShrink: 0,
            }}
          />
          <NextImage
            src="/Hospo3.png"
            alt="Hospo Dojo logo"
            height={100}
            width={100}
            style={{
              maxWidth: '40vw',
              height: 'auto',
              flexShrink: 0,
            }}
          />
        </Flex>
        <JumboTitle
          c="#01E194"
          ta="center"
          fz="xs"
          maw={900}
          mx="auto"
          mt="xl"
          fw={700}
        >
          Finance your commercial kitchen designs
        </JumboTitle>
      </motion.div>
    </>
  );
}