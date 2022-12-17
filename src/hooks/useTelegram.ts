import { TelegramWebApps } from 'telegram-webapps-types';

const tg: TelegramWebApps.WebApp = Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => tg.close();

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
  };
};
