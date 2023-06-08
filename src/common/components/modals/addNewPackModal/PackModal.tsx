import s from './style.module.scss'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { Checkbox, FormControl, IconButton, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { packNameSchema } from './packNameSchema'
import { useAppDispatch } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close'


type InputsType = yup.InferType<typeof packNameSchema>

type PropsType = {
  handleCloseModal: () => void
  title: string
}

export const PackModal = (props: PropsType) => {
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
    <>
      <div className={s.modalHeader}>
        <span>{props.title}</span>
        <IconButton onClick={props.handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <hr className={s.line} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={s.form}>
          <TextField
            type={'text'}
            label={'Name pack'}
            {...register('packName')}
            variant={'standard'}
            error={!!errors.packName?.message}
            helperText={errors.packName?.message}
            className={s.inputPackName}
          />
          <div className={s.checkbox}>
            <Checkbox id='rememberMe' {...register('privatePack')} />
            <span>Private pack</span>
          </div>
          <div className={s.buttons}>
            <UniversalButton title={'Close'}
                             marginTop={'35px'}
                             type={'button'}
                             width={'127'}
                             textColor={'black'}
                             onClickCallback={props.handleCloseModal} />
            <UniversalButton title={'Save'}
                             disabled={getFieldState('packName').invalid}
                             marginTop={'35px'}
                             width={'127'} />
          </div>
        </FormControl>
      </form>
    </>
  )
}