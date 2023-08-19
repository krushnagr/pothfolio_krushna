import {    Text, VStack } from '@chakra-ui/react'
import React from 'react'
import classes from './SideBar.module.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const nevigate = useNavigate();
  return (
      <VStack  height={'full'} spacing={7} className={classes.text}  fontSize={28} fontWeight={'bold'} as='u'>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/')}}>About</Text>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/projets')}}>Projects</Text>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/blogs')}}>Blogs</Text>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/skills')}}>Skills</Text>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/timeline')}}>TimeLine</Text>
        <Text cursor={'pointer'} onClick={()=>{nevigate('/contacts')}}>Contacts</Text>
      </VStack>
  )
}

export default SideBar