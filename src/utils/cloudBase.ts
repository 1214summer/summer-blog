import cloudbase from '@cloudbase/js-sdk'
import { env } from './constant';

const app = cloudbase.init({
    env: env,
    region: "ap-shanghai", 
});
export const auth = app.auth({ persistence: 'local' });

export const db = app.database();

export const command = db.command as any;
