export const buttonStyle = {
  width: '114px',
  height: '36px',
  color: '#fff',
  border: '1px solid #4C4C4C',

  '&:hover': {
    backgroundColor: '#4C4C4C',
    transition: '300ms ease-in-out'
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#A280FF',
    transition: '300ms ease-in-out'
  },
  '&.Mui-selected': {
    backgroundColor: '#8C61FF',
    color: 'white',
    border: '1px solid #8C61FF'
  }
}