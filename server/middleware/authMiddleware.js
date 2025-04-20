import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

// Middleware ( Protect Company Routes )
export const protectCompany = async (req,res,next) => {

    // Getting Token Froms Headers
    const token = req.headers.token

    
    if (!token) {
        return res.json({ success:false, message:'Not authorized, Login Again'})
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password')

        next()

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="40aaeb5a-24e3-5695-9a74-2dbc871274f2")}catch(e){}}();
//# debugId=40aaeb5a-24e3-5695-9a74-2dbc871274f2
