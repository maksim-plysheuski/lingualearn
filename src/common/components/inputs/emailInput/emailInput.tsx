import React, {FC} from 'react';
import s from './styles.module.scss'
import {TextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField/TextField";
import classNames from "classnames";
import {UseFormRegisterReturn} from 'react-hook-form/dist/types/form';

type Props = TextFieldProps & {
    errorMessage: string | undefined
    register: UseFormRegisterReturn
}

export const EmailInput: FC<Props> = ({errorMessage, register, className, ...resProps}) => {
    return (
        <TextField className={classNames(s.inputField, className)}
                   type={"text"}
                   label={"Email"}
                   variant="standard"
                   error={!!errorMessage}
                   helperText={errorMessage}
                   {...register}
                   {...resProps}
        />
    );
};

