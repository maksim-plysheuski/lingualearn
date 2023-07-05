export const sliderStyle = {
  padding: 0,
  '& .MuiSlider-thumb': {
    color: 'white',
    border: '5px solid #8C61FF',
    '&:hover': {
      color: '#b194ff'
    }
  },
  '& .MuiSlider-track': {
    color: '#8C61FF'
  },
  '& .MuiSlider-rail': {
    color: '#8C61FF'
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 14,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#8C61FF',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)'
    },
    '& > *': {
      transform: 'rotate(45deg)'
    }
  }
}