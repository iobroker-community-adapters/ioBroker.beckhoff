import React from 'react';
import I18n from '@iobroker/adapter-react/i18n';
import { Box, Typography } from '@material-ui/core';
import SettingsForm from './SettingsForm';

interface SettingsProps {
    nativeProps: ioBroker.AdapterConfig;
    onNativePropsChange: (name: keyof ioBroker.AdapterConfig, value: any) => void;
    onValidation: (isValid: boolean) => void;
}

const Settings = ({ nativeProps, onNativePropsChange, onValidation }: SettingsProps) => {
    return (
        <Box padding={2}>
            <Box pb={2}>
                <Typography variant="h5" color="textPrimary">
                    {I18n.t('beckhoffAdapterSettings')}
                </Typography>
            </Box>
            <SettingsForm
                nativeProps={nativeProps}
                onNativePropsChange={onNativePropsChange}
                onValidation={onValidation}
            />
        </Box>
    );
};

export default Settings;
