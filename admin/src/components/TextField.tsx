import React, { ReactElement } from 'react';
import { TextField as MuiTextField, makeStyles } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';
import * as yup from 'yup';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 0,
        minWidth: 400,
        minHeight: 92,
        marginBottom: 5,
    },
}));

interface TextFieldProps {
    name: keyof ioBroker.AdapterConfig;
    type?: 'text' | 'number';
    nativeProps: ioBroker.AdapterConfig;
    onNativePropsChange: (name: keyof ioBroker.AdapterConfig, value: any) => void;
    fieldErrors: yup.ValidationError[] | null;
}

const TextField = ({
    name,
    type = 'text',
    nativeProps,
    onNativePropsChange,
    fieldErrors,
}: TextFieldProps): ReactElement => {
    const styles = useStyles();

    const fieldError = fieldErrors?.find((fieldError) => fieldError.path === name);

    return (
        <MuiTextField
            label={I18n.t(name)}
            value={nativeProps[name]}
            type={type}
            onChange={(e) => onNativePropsChange(name, e.target.value)}
            margin="normal"
            className={styles.root}
            error={!!fieldError}
            helperText={fieldError?.message}
        />
    );
};

export default TextField;
