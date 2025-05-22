'use client';

import { Text, Title, Image, Flex, Grid } from '@mantine/core';
import classes from './Welcome.module.css';
import image from '../../public/AA_Dark_Logo.svg';
import NextImage from 'next/image';
import { JumboTitle } from '../JumboTitle';
import { motion } from 'motion/react'


export function KitchenWelcome() {
  return (
    <>
      <motion.div initial={{ opacity: 0.0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <Grid justify="center" align="center" pt="md">
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }} pr="xl">
          <NextImage
            src={image}
            alt="Logo"
            style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
          />
        </Grid.Col>
        <Grid.Col span={5} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
        <NextImage
          src="/Hospo3.png"
          alt="Hospo Dojo logo"
          height={100}
          width={100}
          style={{ height: '100%', width: 'auto', maxWidth: '80vw' }}
        />
        </Grid.Col>
      </Grid>
      <JumboTitle c="#01E194" ta="center" fz="xs" maw={900} mx="auto" mt="xl" fw={700}>
        Finance your commerical kitchen designs
      </JumboTitle>
      </motion.div>
    </>
  );
}
