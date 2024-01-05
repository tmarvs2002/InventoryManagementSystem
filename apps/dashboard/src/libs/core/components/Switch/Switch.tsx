'use client';

import styled from "styled-components";
import React from "react";

import SwitchProps from "./SwitchProps";
import Typography from "../Typography";

const SwitchInput = styled('input')({
    opacity: '0',
    width: '0',
    height: '0',

    '&:checked + .slider:before': {
        transform: 'translateX(26px)',
        // backgroundImage: `url('/assets/icons/on.png')`,        
    },

    '&:checked + .slider': {
        background: '#67CE67'
    },    

})

const SwitchLabel = styled('label')({
    position: 'relative',
    display: 'inline-block',
    width: '56px',
    height: '30px',
})

const SwitchSlider = styled('span')({
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#b2bec3',
    cursor: 'pointer',
    borderRadius: '34px',
    

    '&:before': {
        position: 'absolute',
        transition: 'all 0.2s ease-out',
        content: '""',
        height: '30px',
        width: '30px',
        top: '0px',
        left: '0px',
        borderRadius: '50%',
        backgroundSize: '30px',
        backgroundColor: '#FFFFFF'
        // backgroundImage: `url('/assets/icons/off.png')`,
    }

})



const SwitchContainer = styled('div')({
  display: 'flex',
  minWidth: '100%',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '16px',
})


const Switch: React.FC<SwitchProps> = ({ label, ...props }) => {

  return (
    <SwitchContainer>
      <SwitchLabel>
        <SwitchInput {...props} type="checkbox" />
        <SwitchSlider className="slider"/>
      </SwitchLabel>
      <Typography variant='bodyStrong' size="lg">{label}</Typography>
    </SwitchContainer>
  )
}

export default Switch