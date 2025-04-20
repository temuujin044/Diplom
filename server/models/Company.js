import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    password: { type: String, required: true },

})

const Company = mongoose.model('Company', companySchema)

export default Company
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="f01a8e03-7202-54ab-9723-c5b0f162300e")}catch(e){}}();
//# debugId=f01a8e03-7202-54ab-9723-c5b0f162300e
