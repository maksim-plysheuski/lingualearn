import s from 'common/components/editableTitle/style.module.scss'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { Checkbox, FormControl, IconButton, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { packNameSchema } from './packNameSchema'
import { useAppDispatch } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close';


type InputsType = yup.InferType<typeof packNameSchema>

type PropsType = {
  handleCloseModal: () => void
}

export const AddNewPackModal = (props: PropsType) => {
  const dispatch = useAppDispatch()


  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<InputsType>({
    mode: 'onBlur',
    resolver: yupResolver(packNameSchema)
  })

  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    let payload = {
      name: data.packName,
      private: data.privatePack
    }
    dispatch(packsThunks.createPack(payload))
      .unwrap()
      .then(() => {
        props.handleCloseModal()
        toast.info(`Pack ${payload.name} has been added`)
      })
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
  }

  return (
    <div>
      <span>Add new pack</span>
      <IconButton onClick={props.handleCloseModal}>
        <CloseIcon sx={{ fontSize: '20px' }} />
      </IconButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <TextField
            type={'text'}
            label={'Name pack'}
            {...register('packName')}
            variant={'standard'}
            error={!!errors.packName?.message}
            helperText={errors.packName?.message}
            sx={{ marginTop: '25px' }}
            className={s.inputUserName}
          />
          <div className={s.checkbox}>
            <Checkbox id='rememberMe' {...register('privatePack')} />
            <span>Private pack</span>
          </div>
          <UniversalButton title={'Save'}
                           marginTop={'34px'}
                           width={'127'} />
          <UniversalButton title={'Close'}
                           type={'button'}
                           width={'127'}
                           textColor={'black'}
                           onClickCallback={props.handleCloseModal} />
        </FormControl>
      </form>

    </div>
  )
}