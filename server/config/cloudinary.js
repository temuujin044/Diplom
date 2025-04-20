import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })

}

export default connectCloudinary
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="be4e2f83-3a3c-58a2-97af-21dfd0ceaf3e")}catch(e){}}();
//# debugId=be4e2f83-3a3c-58a2-97af-21dfd0ceaf3e
