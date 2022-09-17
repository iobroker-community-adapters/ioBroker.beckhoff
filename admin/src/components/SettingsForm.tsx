import React, { ReactElement, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import * as yup from 'yup';
import TextField from './TextField';
import I18n from '@iobroker/adapter-react/i18n';

interface SettingsFormProps {
    nativeProps: ioBroker.AdapterConfig;
    onNativePropsChange: (name: keyof ioBroker.AdapterConfig, value: any) => void;
    onValidation: (isValid: boolean) => void;
}

const SettingsForm = ({ nativeProps, onNativePropsChange, onValidation }: SettingsFormProps): ReactElement => {
    const fieldErrors = useMemo(() => {
        const validationSchema = yup.object({
            targetHost: yup.string().required(I18n.t('mandatoryField')),
            targetTcpPort: yup
                .number()
                .typeError(I18n.t('mandatoryField'))
                .positive(I18n.t('validPortNumberNeeded'))
                .integer(I18n.t('validPortNumberNeeded')),
            targetAmsNetId: yup
                .string()
                .required(I18n.t('mandatoryField'))
                .matches(
                    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    { message: I18n.t('validAmsNetIdNeeded') },
                ),
            targetAmsPort: yup
                .number()
                .typeError(I18n.t('mandatoryField'))
                .positive(I18n.t('validPortNumberNeeded'))
                .integer(I18n.t('validPortNumberNeeded')),
            sourceAmsNetId: yup
                .string()
                .required(I18n.t('mandatoryField'))
                .matches(
                    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    { message: I18n.t('validAmsNetIdNeeded') },
                ),
            sourceAmsPort: yup
                .number()
                .typeError(I18n.t('mandatoryField'))
                .positive(I18n.t('validPortNumberNeeded'))
                .integer(I18n.t('validPortNumberNeeded')),
            timeout: yup
                .number()
                .typeError(I18n.t('mandatoryField'))
                .positive(I18n.t('validPortNumberNeeded'))
                .integer(I18n.t('validPortNumberNeeded')),
            reconnectInterval: yup
                .number()
                .typeError(I18n.t('mandatoryField'))
                .positive(I18n.t('validPortNumberNeeded'))
                .integer(I18n.t('validPortNumberNeeded')),
        });

        try {
            validationSchema.validateSync(nativeProps, { abortEarly: false });

            onValidation(true);
            return null;
        } catch (error) {
            onValidation(false);
            return (error as yup.ValidationError).inner;
        }
    }, [nativeProps]);

    return (
        <Grid container spacing={2}>
            <Grid container spacing={2} item>
                <Grid item>
                    <TextField
                        name="targetHost"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="targetTcpPort"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                        type="number"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="targetAmsNetId"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="targetAmsPort"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                        type="number"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} item>
                <Grid item>
                    <TextField
                        name="sourceAmsNetId"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="sourceAmsPort"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} item>
                <Grid item>
                    <TextField
                        name="timeout"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        name="reconnectInterval"
                        nativeProps={nativeProps}
                        onNativePropsChange={onNativePropsChange}
                        fieldErrors={fieldErrors}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SettingsForm;
