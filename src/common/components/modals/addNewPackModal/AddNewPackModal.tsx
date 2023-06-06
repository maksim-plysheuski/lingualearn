import s from 'common/components/editableTitle/style.module.scss'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { Checkbox, FormControl, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { packNameSchema } from './packNameSchema'


type InputsType = yup.InferType<typeof packNameSchema>


export const AddNewPackModal = () => {

  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<InputsType>({
    mode: 'onBlur',
    resolver: yupResolver(packNameSchema)
  })

  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    console.log(data)
  }


  return (
    <div>
      <span>Add new pack</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField
            type={'text'}
            label={'Name pack'}
            {...register('packName')}
            variant={'standard'}
            sx={{ marginTop: '25px' }}
            className={s.inputUserName}
          />
          <div className={s.checkbox}>
            <Checkbox id='rememberMe' {...register('privatePack')} />
            <span>Private pack</span>
          </div>

          <UniversalButton title={'Save'}  marginTop={'34px'} />
        </FormControl>
      </form>
    </div>
  )
}