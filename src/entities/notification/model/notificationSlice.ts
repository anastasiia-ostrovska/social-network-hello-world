import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps } from '@mui/material';
import { NotificationItem } from './types';

interface NotificationState {
  notifications: NotificationItem[];
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  selectors: {
    selectLastNotification: (state) =>
      state.notifications[state.notifications.length - 1] || null,
  },
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<{
        alertType: AlertProps['severity'];
        message: string;
        title?: string;
      }>
    ) => {
      const { alertType, message, title } = action.payload;

      state.notifications.push({
        id: crypto.randomUUID(),
        alertType,
        message,
        title: title || '',
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { selectLastNotification } = notificationSlice.selectors;
export const { addNotification, removeNotification, clearAllNotifications } =
  notificationSlice.actions;
